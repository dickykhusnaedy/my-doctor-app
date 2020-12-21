import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {Firebase} from '../../config';
import {colors} from '../../utils';

const ChoooseDoctor = ({navigation, route}) => {
  const itemCategory = route.params;
  const [listDoctor, setListDoctor] = useState([]);

  const callDoctorByCategory = (category) => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category') // for display data by category
      .equalTo(category) // for sort data relate with orderByChild
      .once('value')
      .then((res) => {
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
  }, []);

  return (
    <View style={styles.container}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
      />
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
    </View>
  );
};

export default ChoooseDoctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
