import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {set} from 'react-native-reanimated';
import {IL_PhotoNull} from '../../assets';
import {Button, Gap, Header, Input, Loading, Profile} from '../../components';
import {Firebase} from '../../config';
import {colors, getData, storeData} from '../../utils';

const EditProfile = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(IL_PhotoNull);
  const [photoDB, setPhotoDB] = useState('');

  const onChangeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    // Open Image Library:
    launchImageLibrary(
      {includeBase64: true, quality: 0.3, maxWidth: 200, maxHeight: 200},
      (response) => {
        // Same code as in above section!
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Opps, sepertinya Anda tidak memilih foto',
            type: 'default',
            backgroundColor: colors.warning,
            color: colors.white,
          });
        } else {
          console.log('success', response);
          setPhotoDB(`data:${response.type};base64, ${response.base64}`);
          const source = {uri: response.uri};
          setPhoto(source);
        }
      },
    );
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data);
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.message.error,
          color: colors.white,
        });
      });
  };

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((error) => {
          showMessage({
            message: error.message,
            type: 'default',
            backgroundColor: colors.message.error,
            color: colors.white,
          });
        });
      }
    });
  };

  const updateProfile = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Oppss.. password Anda kurang dari 6 karakter',
          type: 'default',
          backgroundColor: colors.message.error,
          color: colors.white,
        });
      } else {
        // update password
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      navigation.replace('MainApp');
    }
  };

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);
  return (
    <>
      <View style={styles.page}>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Gap height={20} />
            <Profile isRemove photo={photo} onPress={getImage} />
            <Gap height={26} />
            <Input
              label="Full Name"
              value={profile.fullName}
              onChangeText={(value) => onChangeText('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={profile.profession}
              onChangeText={(value) => onChangeText('profession', value)}
            />
            <Gap height={24} />
            <Input label="Email Address" value={profile.email} disable />
            <Gap height={24} />
            <Input
              label="Password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Save Profile" onPress={updateProfile} />
            <Gap height={20} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
  },
});
