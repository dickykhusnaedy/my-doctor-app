import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DummyImageHospital1,
  DummyImageHospital2,
  DummyImageHospital3,
  IL_ImageBG,
} from '../../assets';
import ListHospitals from '../../components/molecules/ListHospitals';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={IL_ImageBG} style={styles.backgroud}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subTitle}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals
          image={DummyImageHospital1}
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospitals
          image={DummyImageHospital2}
          type="Rumah Sakit Anak"
          name="Happy Family & Kids"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospitals
          image={DummyImageHospital3}
          type="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
        />
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
