import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {IL_Logo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, storeData, useForm, showError} from '../../utils';

const Login = ({navigation}) => {
  const dispacth = useDispatch();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [errorInput, setErrorInput] = useState(true);

  const login = () => {
    // a function to change reducer "SET_LOADING" from redux
    dispacth({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        // a function to change reducer "SET_LOADING" from redux
        dispacth({type: 'SET_LOADING', value: false});
        // function for login with firebase realtime database
        Firebase.database()
          .ref(`users/${success.user.uid}/`)
          .once('value')
          .then((result) => {
            if (result.val()) {
              storeData('user', result.val());
              navigation.replace('MainApp');
            }
            setForm('reset');
          });
      })
      .catch((error) => {
        setErrorInput(error.message);
        // a function to change reducer "SET_LOADING" from redux
        dispacth({type: 'SET_LOADING', value: false});
        // show error when login not success
        showError(error.message);
      });
  };

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <IL_Logo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
            error={errorInput}
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={login} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    maxWidth: 155,
    marginVertical: 40,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
