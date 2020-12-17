import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {IconAddButton, IconRemovePhoto, IL_PhotoNull} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';
import {Firebase} from '../../config';

const UploadProfile = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(IL_PhotoNull);
  const [photoForDB, setPhotoDB] = useState('');

  const getImage = () => {
    // Open Image Library:
    launchImageLibrary({includeBase64: true}, (response) => {
      // Same code as in above section!
      if (response.didCancel || response.error) {
        showMessage({
          message: 'Opps, sepertinya Anda tidak memilih foto',
          type: 'default',
          backgroundColor: colors.warning,
          color: colors.white,
        });
      } else {
        setPhotoDB(`data:${response.type}:base64, ${response.base64}`);
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };

  const uploadPhoto = () => {
    Firebase.database()
      // root users (table name)
      // success.user.uid to save data with the registered uid user
      .ref('users/' + uid + '/')
      // save data to firebase
      .update({photo: photoForDB});
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        icon="back-dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.topWrapper}>
          <TouchableOpacity style={styles.profileWrapper} onPress={getImage}>
            <Image source={photo} style={styles.imgProfile} />
            {!hasPhoto && <IconAddButton style={styles.btnStyle} />}
            {hasPhoto && <IconRemovePhoto style={styles.btnStyle} />}
          </TouchableOpacity>
          <Text style={styles.textTitle}>{fullName}</Text>
          <Text style={styles.textSubTitle}>{profession}</Text>
        </View>
        <View style={styles.bottomWrapper}>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadPhoto}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 40,
  },
  topWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomWrapper: {
    paddingBottom: 64,
  },
  profileWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.border,
  },
  imgProfile: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  btnStyle: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  textTitle: {
    fontSize: 24,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  textSubTitle: {
    fontSize: 18,
    marginTop: 4,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
});
