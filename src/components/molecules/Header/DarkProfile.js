import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyImageDocter1} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atom';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.doctorName}>Nairobi Putri Hayza</Text>
        <Text style={styles.doctorCategory}>Dokter Anak</Text>
      </View>
      <Image source={DummyImageDocter1} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    backgroundColor: colors.secondary,
  },
  content: {flex: 1},
  doctorName: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
  doctorCategory: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.text.subTitle,
    fontFamily: fonts.primary.normal,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
