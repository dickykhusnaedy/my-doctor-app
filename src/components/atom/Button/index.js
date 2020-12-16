import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icon={icon} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBtn}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor:
      type === 'secondary' ? colors.white : colors.button.primary.background,
  }),
  disableBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },
  title: (type) => ({
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: type === 'secondary' ? colors.button.secondary.text : colors.white,
  }),
  disableText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.button.disable.text,
  },
});
