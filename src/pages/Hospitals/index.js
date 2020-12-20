import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {IL_ImageBG} from '../../assets';
import {ListHospitals} from '../../components/molecules';
import {Firebase} from '../../config';
import {colors, fonts, showError} from '../../utils';

const Hospitals = () => {
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    Firebase.database()
      .ref('hospital/')
      .once('value')
      .then((success) => {
        if (success.val()) {
          setHospital(success.val());
        }
      })
      .catch((error) => {
        showError(error.message);
      });
  }, []);

  return (
    <View style={styles.page}>
      <ImageBackground source={IL_ImageBG} style={styles.backgroud}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subTitle}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospital.map((item) => {
          return (
            <ListHospitals
              key={item.id}
              image={item.image}
              type={item.type}
              name={item.name}
              address={item.address}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  backgroud: {height: 240},
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
    color: colors.white,
    fontFamily: fonts.primary[300],
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
