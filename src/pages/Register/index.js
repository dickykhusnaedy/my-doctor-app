import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, fonts, useForm} from '../../utils';
import {Firebase} from '../../config';

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        console.log('Register success', success);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'danger',
          backgroundColor: colors.message.error,
          color: colors.white,
        });
        console.log('Error registers: ', error);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
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
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 10,
  },
});
