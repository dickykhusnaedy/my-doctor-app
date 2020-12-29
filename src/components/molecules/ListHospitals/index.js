import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListHospitals = ({image, type, name, address}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View>
        <Text style={styles.hospitalName}>{type}</Text>
        <Text style={styles.hospitalName}>{name}</Text>
        <Text style={styles.hospitalAddress}>{address}</Text>
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
    alignItems: 'center',
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
