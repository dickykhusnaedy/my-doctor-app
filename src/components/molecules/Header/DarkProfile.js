import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IL_PhotoNull} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atom';

const DarkProfile = ({onPress, title, desc, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.doctorName}>{title}</Text>
        <Text style={styles.doctorCategory}>{desc}</Text>
      </View>
      <Image
        source={photo.length > 1 ? photo : IL_PhotoNull}
        style={styles.avatar}
      />
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
    textTransform: 'capitalize',
    color: colors.text.subTitle,
    fontFamily: fonts.primary.normal,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
