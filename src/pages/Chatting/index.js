import moment from 'moment';
import 'moment/min/locales'; // import this if you will to change date locale
import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {Firebase} from '../../config';
import {
  colors,
  fonts,
  getChatTime,
  getData,
  setDateChat,
  showError,
} from '../../utils';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const scrollViewRef = useRef();
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const chatId = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatId}/allChat/`;

    // get realtime data from firebase
    Firebase.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allChatData = [];

          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];
            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allChatData.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allChatData);
        }
      });
  }, [dataDoctor.data.uid, user.uid]);

  useEffect(() => {
    const today = new Date();
    const chatId = `${user.uid}_${dataDoctor.data.uid}`;
    const urlMessageUser = `messages/${user.uid}/${chatId}`;

    if (chatData.length > 0) {
      if (user.uid !== undefined || dataDoctor.data.uid !== undefined) {
        Firebase.database()
          .ref(urlMessageUser)
          .update({read_at: setDateChat(today)});
      }
    }
  }, [chatData, dataDoctor.data.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  const chatSend = () => {
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    const chatId = `${user.uid}_${dataDoctor.data.uid}`;
    const urlSaveDataChat = `chatting/${chatId}/allChat/${setDateChat(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatId}`;
    const urlMessageDoctor = `messages/${dataDoctor.data.uid}/${chatId}`;

    const dataHistoryChatUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(today),
      uidPartner: dataDoctor.data.uid,
    };
    const dataHistoryChatDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(today),
      read_at: '',
      uidPartner: user.uid,
    };

    // Send to firebase
    Firebase.database()
      .ref(urlSaveDataChat)
      .push(data)
      .then(() => {
        setChatContent('');
        // save data message user to firebase
        Firebase.database().ref(urlMessageUser).set(dataHistoryChatUser);
        // save data message doctor to firebase
        Firebase.database().ref(urlMessageDoctor).set(dataHistoryChatDoctor);
      })
      .catch((error) => {
        showError(error.mesesage);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullName}
        desc={dataDoctor.data.category}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.chatScreen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({duration: 5000})
          }>
          {chatData.map((chat) => {
            moment.locale('id'); // for change date locale to indonesian
            // convert string date to date format using momentjs library
            const dateConvert = moment(`${chat.id}`, 'YYYY-MM-DD').format(
              'dddd, ' + 'DD MMMM YYYY',
            );
            return (
              <View key={chat.id}>
                <Text style={styles.textDate}>{dateConvert}</Text>
                {chat.data.map((itemChat) => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isMe={isMe}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      photo={isMe ? null : {uri: dataDoctor.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        fullName={dataDoctor.data.fullName}
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chatScreen: {flex: 1},
  textDate: {
    fontSize: 11,
    textAlign: 'center',
    marginVertical: 20,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
});
