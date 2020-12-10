import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </View>
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
