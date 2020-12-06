import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyImageHospital1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListHospitals = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyImageHospital1} style={styles.image} />
      <View>
        <Text style={styles.hospitalName}>Rumah Sakit</Text>
        <Text style={styles.hospitalName}>Citra Bunga Merdeka</Text>
        <Text style={styles.hospitalAddress}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default ListHospitals;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
  },
  hospitalName: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
  },
  hospitalAddress: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
  },
});
