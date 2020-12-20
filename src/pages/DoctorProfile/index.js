import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyImageDocter1, IL_PhotoNull} from '../../assets';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;

  return (
    <View style={styles.page}>
      <Header title="Profil Dokter" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <Profile
        name={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
        photo={{uri: dataDoctor.data.photo}}
      />
      <Gap height={10} />
      <ProfileItem title="Alumnus" value={dataDoctor.data.university} />
      <ProfileItem
        title="Tempat Praktik"
        value={dataDoctor.data.hospital_address}
      />
      <ProfileItem title="No. STR" value={dataDoctor.data.str_number} />
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
