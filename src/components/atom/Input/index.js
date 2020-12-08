import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    borderColor: colors.border,
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
});
