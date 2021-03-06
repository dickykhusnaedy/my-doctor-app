import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {IL_Logo, IL_GetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <ImageBackground source={IL_GetStarted} style={styles.page}>
        <View style={styles.overlay} />
        <View>
          <IL_Logo />
          <Text style={styles.title}>
            Konsultasi dengan dokter jadi lebih mudah & fleksibel
          </Text>
        </View>
        <View>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Register')}
          />
          <Gap height={16} />
          <Button
            type="secondary"
            title="Sign In"
            onPress={() => navigation.replace('Login')}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    paddingTop: 60,
    justifyContent: 'space-between',
  },
  overlay: {
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 30,
    marginTop: 70,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});
