import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoadListData = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.wrapper()}>
        <View style={styles.circle} />
        <View style={styles.wrapperBar}>
          <View style={styles.bar(120)} />
          <View style={styles.bar(80, 10)} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default LoadListData;

const styles = StyleSheet.create({
  wrapper: (marginTop) => ({
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: marginTop,
  }),
  circle: {width: 50, height: 50, borderRadius: 50 / 2},
  wrapperBar: {flex: 1, marginLeft: 10},
  bar: (width, marginTop) => ({
    height: 10,
    width: width,
    borderRadius: 4,
    marginTop: marginTop,
  }),
});
