import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profil Dokter" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <Profile name="Nairobi Putri Hayza" desc="Dokter Anak" />
      <Gap height={10} />
      <ProfileItem title="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileItem title="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <ProfileItem title="No. STR" value="0000116622081996" />
      <View style={styles.btnWrapper}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnWrapper: {
    marginTop: 19,
    paddingHorizontal: 40,
  },
});
