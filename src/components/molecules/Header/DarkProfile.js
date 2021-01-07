import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IL_PhotoNull} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atom';

const DarkProfile = ({onPress, title, desc, photo}) => {
  const trimText = (doctorName) => {
    const maxLength = 25;
    if (doctorName.length > maxLength) {
      return doctorName.substring(0, maxLength).trimEnd() + '...';
    } else {
      return doctorName;
    }
  };

  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.doctorName}>{trimText(title)}</Text>
        <Text style={styles.doctorCategory}>{desc}</Text>
      </View>
      <Image
        source={photo.uri.length > 1 ? photo : IL_PhotoNull}
        style={styles.avatar}
      />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    backgroundColor: colors.secondary,
  },
  content: {flex: 1},
  doctorName: {
    fontSize: 18,
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
