import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IL_NotFound} from '../../assets';
import {List, LoadingSkeleton} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, getData} from '../../utils';

const Messages = ({navigation}) => {
  const [loadingData, setLoadingData] = useState(false);
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Firebase.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messageDB = rootDB.child(urlHistory);

    messageDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        setLoadingData(true);
        const oldData = snapshot.val();
        const data = [];
        const promises = await Object.keys(oldData).map(async (key) => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');
          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            ...oldData[key],
          });
        });
        await Promise.all(promises);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  console.log(historyChat.length);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {(!loadingData || historyChat.length === 0) && (
          <View style={styles.wrapperLoading}>
            <LoadingSkeleton type="loading-list" />
          </View>
        )}
        {loadingData && (
          <>
            {historyChat.length === 0 && (
              <View style={styles.wrapperNotFound}>
                <IL_NotFound />
              </View>
            )}
            <ScrollView showsVerticalScrollIndicator={false}>
              {historyChat.map((chat) => {
                const dataDoctor = {
                  id: chat.detailDoctor.uid,
                  data: chat.detailDoctor,
                };
                return (
                  <List
                    key={chat.id}
                    image={{uri: chat.detailDoctor.photo}}
                    name={chat.detailDoctor.fullName}
                    desc={chat.lastContentChat}
                    read={chat.read_at !== undefined ? chat.read_at : 'kirim'}
                    isMe={user.uid !== chat.uidPartner}
                    onPress={() => navigation.navigate('Chatting', dataDoctor)}
                  />
                );
              })}
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  wrapperLoading: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  wrapperNotFound: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 16,
    marginLeft: 16,
  },
});
