import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListChatDoctor = ({image, name, desc, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.imageDoctor} />
      <View style={styles.wrapperListChat}>
        <Text style={styles.nameDoctor}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'dark' && <IconNext />}
    </TouchableOpacity>
  );
};

export default ListChatDoctor;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: 'space-between',
  },
  wrapperListChat: {
    flex: 1,
  },
  imageDoctor: {
    width: 46,
    height: 46,
    marginRight: 16,
    borderRadius: 46 / 2,
  },
  nameDoctor: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
  },
  desc: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
  },
});
