import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts, showError} from '../../../utils';

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  error,
}) => {
  const [borderColor, setBorderColor] = useState(colors.border);
  const onFocusForm = () => {
    setBorderColor(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorderColor(colors.border);
    if (error) {
      if (value.length === 0) {
        setBorderColor(colors.border);
      } else if (value.length < 6) {
        setBorderColor(colors.message.error);
        showError('Oppss.. password Anda kurang dari 6 karakter');
      } else {
        setBorderColor(colors.primary);
      }
    }
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(borderColor, !disable)}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (borderColor, disable) => ({
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    borderColor: borderColor,
    backgroundColor: disable
      ? colors.white
      : colors.textInput.disable.background,
    color: disable ? colors.text.primary : colors.textInput.disable.text,
    fontFamily: fonts.primary[400],
  }),
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
});
