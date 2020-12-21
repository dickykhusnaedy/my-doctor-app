import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IconSendDark />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <IconSendLight />
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: disable ? colors.disable : colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
