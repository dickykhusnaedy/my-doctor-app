import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <View style={styles.wrapper}>
        <ActivityIndicator size={60} color={colors.primary} />
        <Text style={styles.text}>Loading ...</Text>
      </View>
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.loadingBackground,
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    color: colors.primary,
    fontFamily: fonts.primary[600],
  },
});
