import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const IsMe = ({text, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.chat}>{text}</Text>
      </View>
      <Text style={styles.chatDate}>{date}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingRight: 16,
  },
  content: {
    padding: 12,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
    backgroundColor: colors.cardLight,
  },
  chat: {
    fontSize: 14,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
  },
  chatDate: {
    fontSize: 11,
    marginTop: 8,
    textAlign: 'right',
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
});
