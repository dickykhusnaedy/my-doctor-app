import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddButton, IL_PhotoNull} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

const UploadProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        icon="back-dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.topWrapper}>
          <View style={styles.profileWrapper}>
            <Image source={IL_PhotoNull} style={styles.imgProfile} />
            <IconAddButton style={styles.btnStyle} />
          </View>
          <Text style={styles.textTitle}>Shayna Melinda</Text>
          <Text style={styles.textSubTitle}>Product Designer</Text>
        </View>
        <View style={styles.bottomWrapper}>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} />
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
  },
  btnStyle: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  textTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  textSubTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 4,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
});
