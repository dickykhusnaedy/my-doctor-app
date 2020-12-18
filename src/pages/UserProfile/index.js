import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {IL_PhotoNull} from '../../assets';
import {Gap} from '../../components/atom';
import {Header, List, Profile} from '../../components/molecules';
import {Firebase} from '../../config';
import {colors, getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    photo: IL_PhotoNull,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        console.log('success logout');
        navigation.replace('GetStarted');
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

  return (
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
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
