import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.page}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.textName}>Shayna Melinda</Text>
        <Text style={styles.textProffesion}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  textName: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  textProffesion: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
});
