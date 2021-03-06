import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {IL_PhotoNull} from '../../assets';
import {Gap} from '../../components/atom';
import {Header, List, Profile} from '../../components/molecules';
import {Firebase} from '../../config';
import {colors, getData, showError, showSuccess} from '../../utils';

const UserProfile = ({navigation}) => {
  const dispacth = useDispatch();
  const [profile, setProfile] = useState({
    photo: IL_PhotoNull,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    navigation.addListener('focus', () => {
      getDataUserFromLocal();
    });
  }, [navigation]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res.photo.length > 1 ? {uri: res.photo} : IL_PhotoNull;
      setProfile(res);
    });
  };

  const signOut = () => {
    dispacth({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .signOut()
      .then(() => {
        dispacth({type: 'SET_LOADING', value: false});
        showSuccess('Your sign out have been succesfully');
        navigation.reset({index: 0, routes: [{name: 'GetStarted'}]});
      })
      .catch((error) => {
        dispacth({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.page}>
        <Header title="Profile" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={20} />
          {profile.fullName.length > 0 && (
            <Profile
              photo={profile.photo}
              name={profile.fullName}
              desc={profile.profession}
            />
          )}
          <Gap height={14} />
          <List
            name="Edit Profile"
            desc="Last updated yesterday"
            type="next"
            icon="edit-profile"
            onPress={() => navigation.navigate('EditProfile')}
          />
          <List
            name="Language"
            desc="Available 12 languages"
            type="next"
            icon="language"
          />
          <List
            name="Give Us Rate"
            desc="On Google Play Store"
            type="next"
            icon="rate"
          />
          <List
            name="Sign Out"
            desc="Read our guidelines"
            type="next"
            icon="help"
            onPress={signOut}
          />
          <Gap height={20} />
        </ScrollView>
      </View>
    </>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
