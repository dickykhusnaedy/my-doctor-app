import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import LoadingSkeletonList from './loadingSkeletonList';

const LoadingSkeleton = ({type}) => {
  if (type === 'loading-list') {
    return <LoadingSkeletonList />;
  }

  return (
    <SkeletonPlaceholder>
      <View style={styles.wrapperSkeleton(120)} />
      <View style={styles.wrapperSkeleton(80, 10)} />
    </SkeletonPlaceholder>
  );
};

export default LoadingSkeleton;

const styles = StyleSheet.create({
  wrapperSkeleton: (width, marginTop) => ({
    height: 15,
    width: width,
    borderRadius: 4,
    marginTop: marginTop,
  }),
});
