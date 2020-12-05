import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icon={icon} />;
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
  title: (type) => ({
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: type === 'secondary' ? colors.button.secondary.text : colors.white,
  }),
});
