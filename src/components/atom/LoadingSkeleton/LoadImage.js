import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../../utils';

const LoadImage = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.container}>
        <View style={styles.loading} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default LoadImage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  loading: {
    height: 60,
    width: 80,
    borderRadius: 10,
    marginRight: 16,
  },
});
