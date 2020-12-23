import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {IL_PhotoNull} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Firebase} from '../../config';
import {
  colors,
  getData,
  showError,
  showSuccess,
  showWarning,
  storeData,
} from '../../utils';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(IL_PhotoNull);
  const [errorInput, setErrorInput] = useState(true);

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
          showWarning('Opps, sepertinya Anda tidak memilih foto');
        } else {
          const uploadFile = `data:${response.type};base64, ${response.base64}`;
          const source = {uri: response.uri};
          setPhoto(source);
          // save photo direct to firebase after user select photo from the gallery
          dispatch({type: 'SET_LOADING', value: true});
          setTimeout(async () => {
            await Firebase.database()
              // root users (table name)
              // success.user.uid to save data with the registered uid user
              .ref(`users/${profile.uid}/`)
              // save data to firebase
              .update({photo: uploadFile});

            // store data to localstorage
            const data = profile;
            data.photo = uploadFile;
            storeData('user', data);

            dispatch({type: 'SET_LOADING', value: false});
            navigation.replace('MainApp');
          }, 3000);
        }
      },
    );
  };

  const updateProfileData = async () => {
    dispatch({type: 'SET_LOADING', value: true});
    const data = profile;
    await Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        showSuccess('Your data has been changed successfully');
        storeData('user', data);
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  const updatePassword = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .updatePassword(password)
          .then(() => {
            showSuccess('Your password has been changed successfully');
          })
          .catch((error) => {
            setErrorInput(error.message);
            showError(error.message);
          });
      }
    });
  };

  const updateProfile = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Oppss.. password Anda kurang dari 6 karakter');
      } else {
        updatePassword();
        updateProfileData();
        setTimeout(() => {
          dispatch({type: 'SET_LOADING', value: false});
          navigation.replace('MainApp');
        }, 3000);
      }
    } else {
      updateProfileData();
      setTimeout(() => {
        dispatch({type: 'SET_LOADING', value: false});
        navigation.replace('MainApp');
      }, 3000);
    }
  };

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto(res.photo.length > 1 ? {uri: res.photo} : IL_PhotoNull);
      setProfile(data);
    });
  }, []);

  return (
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
            error={errorInput}
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={updateProfile} />
          <Gap height={20} />
        </View>
      </ScrollView>
    </View>
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
