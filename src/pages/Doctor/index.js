import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  DummyImageDocter1,
  DummyImageDocter2,
  DummyImageDocter3,
  JSONCategoryDoctor,
} from '../../assets';
import {
  DoctorCategory,
  Gap,
  GoodNews,
  HomeProfile,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
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
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.labelName}>Top Rated Doctors</Text>
            <RatedDoctor
              avatar={DummyImageDocter1}
              name="Alexa Rachel"
              desc="Pediatrician"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              avatar={DummyImageDocter2}
              name="Sunny Frank"
              desc="Dentist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              avatar={DummyImageDocter3}
              name="Poe Minn"
              desc="Podiatrist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
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
