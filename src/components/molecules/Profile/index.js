import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({photo, name, desc, isRemove, onPress}) => {
  return (
    <View style={styles.content}>
      {!isRemove && (
        <View style={styles.profileWrapper}>
          <Image source={photo} style={styles.avatar} />
        </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.profileWrapper} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <IconRemovePhoto style={styles.remove} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.border,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 20,
    marginTop: 16,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  profession: {
    fontSize: 16,
    marginTop: 2,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
  remove: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
