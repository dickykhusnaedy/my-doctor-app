import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label, placeholder, value, onChangeText, secureTextEntry}) => {
  const [borderColor, setBorderColor] = useState(colors.border);
  const onFocusForm = () => {
    setBorderColor(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorderColor(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(borderColor)}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (borderColor) => ({
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    borderColor: borderColor,
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
  }),
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
});
