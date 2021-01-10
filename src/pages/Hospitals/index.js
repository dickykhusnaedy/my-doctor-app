import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {IL_ImageBG} from '../../assets';
import {ListHospitals, Gap} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts, showError} from '../../utils';

const Hospitals = () => {
  const [hospital, setHospital] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getDataHospital();
  }, []);

  const getDataHospital = () => {
    Firebase.database()
      .ref('hospital/')
      .once('value')
      .then((success) => {
        if (success.val()) {
          setLoadData(true);
          const oldData = success.val();
          const data = [];

          Object.keys(oldData).map((key) => {
            data.push(oldData[key]);
          });
          setRefreshing(false);
          setHospital(data);
        }
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  useEffect(() => {
    getDataHospital();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.page}>
        <ImageBackground source={IL_ImageBG} style={styles.backgroud}>
          <Text style={styles.title}>Nearby Hospitals</Text>
          <Text style={styles.subTitle}>{hospital.length} Hospital</Text>
        </ImageBackground>
        <View style={styles.content}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[colors.primary]}
              />
            }>
            <Gap height={14} />
            {/* <LoadingSkeleton type="loading-image" /> */}
            {hospital.map((item) => {
              return (
                <ListHospitals
                  key={item.id}
                  image={item.image}
                  type={item.type}
                  name={item.name}
                  load={loadData}
                  address={item.address}
                />
              );
            })}
            <Gap height={14} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  backgroud: {height: 240},
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
    color: colors.white,
    fontFamily: fonts.primary[300],
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
  },
});
