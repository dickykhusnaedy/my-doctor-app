import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import BtnIconSend from '../../atom/Button/BtnIconSend';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Tulis pesan untuk Nairobi"
        style={styles.textInput}
      />
      <BtnIconSend disable />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    padding: 14,
    borderRadius: 10,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
    backgroundColor: colors.disable,
    marginRight: 10,
    maxHeight: 45,
  },
});
