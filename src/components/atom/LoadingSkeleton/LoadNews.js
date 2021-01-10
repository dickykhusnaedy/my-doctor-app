import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../../utils';

const LoadNews = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.wrapper}>
        <View style={styles.wrapperBar}>
          <View style={styles.barTitle} />
          <View style={styles.barDate} />
        </View>
        <View style={styles.img} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperBar}>
          <View style={styles.barTitle} />
          <View style={styles.barDate} />
        </View>
        <View style={styles.img} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperBar}>
          <View style={styles.barTitle} />
          <View style={styles.barDate} />
        </View>
        <View style={styles.img} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default LoadNews;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderBottomColor: colors.border,
  },
  wrapperBar: {flex: 1, justifyContent: 'center'},
  barTitle: {
    width: 200,
    height: 10,
    borderRadius: 4,
  },
  barDate: {
    width: 100,
    height: 8,
    borderRadius: 4,
    marginTop: 10,
  },
  img: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
});
