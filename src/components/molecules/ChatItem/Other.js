import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IL_PhotoNull} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = ({text, date, photo}) => {
  return (
    <View style={styles.container}>
      <Image
        source={photo.uri.length > 1 ? photo : IL_PhotoNull}
        style={styles.avatar}
      />
      <View>
        <View style={styles.content}>
          <Text style={styles.chat}>{text}</Text>
        </View>
        <Text style={styles.chatDate}>{date}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  content: {
    padding: 12,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: colors.primary,
  },
  chat: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.primary.normal,
  },
  chatDate: {
    fontSize: 11,
    marginTop: 8,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
});
