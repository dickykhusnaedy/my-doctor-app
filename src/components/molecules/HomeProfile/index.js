import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IL_PhotoNull} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: IL_PhotoNull,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      // add {uri} for data.photo to show image profile in component image
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
    });
  }, []);

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
