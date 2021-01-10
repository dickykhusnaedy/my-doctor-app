import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import LoadImage from './LoadImage';
import LoadListData from './LoadListData';
import LoadNews from './LoadNews';
import LoadTopRatedDoctors from './LoadTopRatedDoctors';

const LoadingSkeleton = ({type}) => {
  if (type === 'loading-list') {
    return <LoadTopRatedDoctors />;
  }
  if (type === 'loading-news') {
    return <LoadNews />;
  }
  if (type === 'loading-list-data') {
    return <LoadListData />;
  }
  if (type === 'loading-image') {
    return <LoadImage />;
  }

  return (
    <SkeletonPlaceholder>
      <View style={styles.wrapper}>
        <View style={styles.loading} />
        <View style={styles.loading} />
        <View style={styles.loading} />
        <View style={styles.loading} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default LoadingSkeleton;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  loading: {
    height: 130,
    width: 130,
    borderRadius: 10,
    marginRight: 10,
  },
});
