import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoadingSkeletonList = () => {
  return (
    <SkeletonPlaceholder speed={8000}>
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={styles.wrapper}>
          <View style={styles.wrapperSkeleton(120)} />
          <View style={styles.wrapperSkeleton(80, 10)} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default LoadingSkeletonList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  wrapper: {
    flex: 1,
  },
  wrapperSkeleton: (width, marginTop) => ({
    height: 10,
    width: width,
    borderRadius: 4,
    marginTop: marginTop,
  }),
});
