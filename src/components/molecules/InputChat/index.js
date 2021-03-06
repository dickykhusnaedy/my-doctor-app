import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import BtnIconSend from '../../atom/Button/BtnIconSend';

const InputChat = ({value, onChangeText, onPress, fullName}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={`Tulis pesan untuk ${fullName}`}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
      <BtnIconSend disable={value.length < 1} onPress={onPress} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: colors.white,
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
