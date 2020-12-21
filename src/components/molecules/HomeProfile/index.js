import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const HomeProfile = ({onPress, profile}) => {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.textName}>{profile.fullName}</Text>
        <Text style={styles.textProffesion}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
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
    textTransform: 'capitalize',
    fontFamily: fonts.primary[600],
  },
  textProffesion: {
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
    fontFamily: fonts.primary.normal,
  },
});
