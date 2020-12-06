import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyCategoryDocter1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = () => {
  return (
    <View style={styles.content}>
      <DummyCategoryDocter1 />
      <Text style={styles.text1}>Saya butuh</Text>
      <Text style={styles.text2}>dokter umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  content: {
    padding: 12,
    height: 130,
    width: 130,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginRight: 10,
    backgroundColor: colors.cardLight,
  },
  text1: {
    fontSize: 12,
    marginTop: 28,
    color: colors.text.primary,
    fontFamily: fonts.primary[300],
  },
  text2: {
    fontSize: 12,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
