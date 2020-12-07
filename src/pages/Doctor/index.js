import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  DoctorCategory,
  Gap,
  GoodNews,
  HomeProfile,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';
import {JSONCategoryDoctor} from '../../assets';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.doctorWrapper}>
                <Gap width={32} />
                {JSONCategoryDoctor.data.map((item) => {
                  return (
                    <DoctorCategory key={item.id} category={item.category} />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.labelName}>Top Rated Doctors</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            <Text style={styles.labelName}>Good News</Text>
          </View>
          <GoodNews />
          <GoodNews />
          <GoodNews />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.white,
  },
  welcome: {
    fontSize: 20,
    maxWidth: 211,
    marginTop: 30,
    marginBottom: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  doctorWrapper: {
    flexDirection: 'row',
  },
  labelName: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
