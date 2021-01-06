import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {IL_Logo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Firebase} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubcribe = Firebase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubcribe();
  }, [navigation]);

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.page}>
        <IL_Logo />
        <Text style={styles.title}>My Doctor</Text>
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
