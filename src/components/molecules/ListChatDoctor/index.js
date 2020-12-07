import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListChatDoctor = ({image, name, chat}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageDoctor} />
      <View>
        <Text style={styles.nameDoctor}>{name}</Text>
        <Text style={styles.chat}>{chat}</Text>
      </View>
    </View>
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
  chat: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
  },
});
