import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atom';

const Header = ({onPress, icon, title}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon={icon} onPress={onPress} />
      <Text style={styles.titleHeader}>{title}</Text>
      <Gap width={20} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  titleHeader: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
