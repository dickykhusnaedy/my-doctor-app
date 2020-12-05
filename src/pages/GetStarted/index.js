import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {IL_Logo, IL_GetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={IL_GetStarted} style={styles.page}>
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
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 35,
    marginTop: 91,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});
