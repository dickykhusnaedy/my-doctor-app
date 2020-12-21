import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atom';
import DarkProfile from './DarkProfile';

const Header = ({onPress, type, title}) => {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.titleHeader(type)}>{title}</Text>
      <Gap width={20} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  titleHeader: (type) => ({
    fontSize: 20,
    flex: 1,
    textTransform: 'capitalize',
    textAlign: 'center',
    color: type === 'dark' ? colors.white : colors.text.primary,
    fontFamily: fonts.primary[600],
  }),
});
