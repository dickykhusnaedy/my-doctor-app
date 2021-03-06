import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IL_PhotoNull} from '../../assets';
import {
  DoctorCategory,
  Gap,
  GoodNews,
  HomeProfile,
  LoadingSkeleton,
  RatedDoctor,
} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, getData, showError} from '../../utils';

const Doctor = ({navigation}) => {
  const [loadingData, setLoadingData] = useState(false);
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctor] = useState([]);
  const [profile, setProfile] = useState({
    photo: IL_PhotoNull,
    fullName: '',
    profession: '',
  });

  const getUserDataFromLocal = () => {
    getData('user').then((res) => {
      // add {uri} for data.photo to show image profile in component image
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : IL_PhotoNull;
      setProfile(res);
    });
  };

  const getCategoryDoctor = () => {
    // get data category docter from firebase
    Firebase.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setLoadingData(true);
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setCategoryDoctor(filterData);
        }
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  const getTopRatedDoctors = () => {
    // get rate data from value doctors at firebase
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          setLoadingData(true);
          const oldData = res.val();
          const data = [];

          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setDoctor(data);
        }
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  const getNews = () => {
    // get data news from firebase
    Firebase.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setLoadingData(true);
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setNews(filterData);
        }
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  useEffect(() => {
    getNews();
    getTopRatedDoctors();
    getCategoryDoctor();
    navigation.addListener('focus', () => {
      getUserDataFromLocal();
    });
  }, [navigation]);

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.page}>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapperSection}>
              <Gap height={20} />
              <HomeProfile
                profile={profile}
                onPress={() => navigation.navigate('UserProfile')}
              />
              <Text style={styles.welcome}>
                Mau konsultasi dengan siapa hari ini?
              </Text>
            </View>
            <View style={styles.wrapperScroll}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.doctorWrapper}>
                  <Gap width={32} />
                  {(!loadingData || categoryDoctor.length === 0) && (
                    <LoadingSkeleton />
                  )}
                  {loadingData && (
                    <>
                      {categoryDoctor.map((item) => {
                        return (
                          <DoctorCategory
                            key={item.id}
                            category={item.category}
                            onPress={() =>
                              navigation.navigate('ChooseDoctor', item)
                            }
                          />
                        );
                      })}
                    </>
                  )}
                  <Gap width={22} />
                </View>
              </ScrollView>
            </View>
            <View style={styles.wrapperSection}>
              <Text style={styles.labelName}>Top Rated Doctors</Text>
              {(!loadingData || doctors.length === 0) && (
                <LoadingSkeleton type="loading-list" />
              )}
              {loadingData && (
                <>
                  {doctors.map((doctor) => {
                    return (
                      <RatedDoctor
                        key={doctor.id}
                        avatar={{uri: doctor.data.photo}}
                        name={doctor.data.fullName}
                        desc={doctor.data.profession}
                        onPress={() =>
                          navigation.navigate('DoctorProfile', doctor)
                        }
                      />
                    );
                  })}
                </>
              )}
              <Text style={styles.labelName}>Good News</Text>
            </View>
            {(!loadingData || news.length === 0) && (
              <LoadingSkeleton type="loading-news" />
            )}
            {loadingData && (
              <>
                {news.map((item) => {
                  return (
                    <GoodNews
                      key={item.id}
                      title={item.title}
                      date={item.date}
                      image={item.image}
                    />
                  );
                })}
              </>
            )}
            <Gap height={30} />
          </ScrollView>
        </View>
      </View>
    </>
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
