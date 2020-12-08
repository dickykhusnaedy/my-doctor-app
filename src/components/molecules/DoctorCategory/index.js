import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  DummyCategoryDocter1,
  DummyCategoryDocter2,
  DummyCategoryDocter3,
  DummyCategoryDocter4,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <DummyCategoryDocter1 />;
    }
    if (category === 'psikiater') {
      return <DummyCategoryDocter2 />;
    }
    if (category === 'dokter obat') {
      return <DummyCategoryDocter3 />;
    }
    if (category === 'dokter anak') {
      return <DummyCategoryDocter4 />;
    }
    return <DummyCategoryDocter1 />;
  };
  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Icon />
      <Text style={styles.text1}>Saya butuh</Text>
      <Text style={styles.text2}>{category}</Text>
    </TouchableOpacity>
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
