import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atom';
import DarkProfile from './DarkProfile';

const Header = ({onPress, type, title, desc, photo}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile onPress={onPress} title={title} desc={desc} photo={photo} />
    );
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
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  titleHeader: (type) => ({
    flex: 1,
    fontSize: 20,
    textTransform: 'capitalize',
    textAlign: 'center',
    color: type === 'dark' ? colors.white : colors.text.primary,
    fontFamily: fonts.primary[600],
  }),
});
