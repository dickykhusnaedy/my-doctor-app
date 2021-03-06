import React, {useEffect, useState} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import {Header, List, LoadingSkeleton} from '../../components';
import {Firebase} from '../../config';
import {colors} from '../../utils';

const ChoooseDoctor = ({navigation, route}) => {
  const itemCategory = route.params;
  const [loadingData, setLoadingData] = useState(false);
  const [listDoctor, setListDoctor] = useState([]);

  const callDoctorByCategory = (category) => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category') // for display data by category
      .equalTo(category) // for sort data relate with orderByChild
      .once('value')
      .then((res) => {
        setLoadingData(true);
        const oldData = res.val();
        const data = [];
        // for parse or convert object data to object array data
        Object.keys(oldData).map((key) => {
          data.push({
            id: key,
            data: oldData[key],
          });
        });
        setListDoctor(data);
      });
  };

  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);

  return (
    <>
      <StatusBar
        backgroundColor={colors.secondary}
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <Header
          type="dark"
          title={`Pilih ${itemCategory.category}`}
          onPress={() => navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {!loadingData || listDoctor.length === 0 ? (
            <LoadingSkeleton type="loading-list-data" />
          ) : (
            <>
              {listDoctor.map((item) => {
                return (
                  <List
                    key={item.id}
                    type="dark"
                    image={{uri: item.data.photo}}
                    name={item.data.fullName}
                    desc={item.data.gender}
                    onPress={() => navigation.push('DoctorProfile', item)}
                  />
                );
              })}
            </>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default ChoooseDoctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
