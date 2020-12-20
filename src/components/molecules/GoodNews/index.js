import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const GoodNews = ({title, date, image}) => {
  return (
    <View style={styles.content}>
      <View style={styles.news}>
        <Text style={styles.titleNews}>{title}</Text>
        <Text style={styles.dateNews}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.imageNews} />
    </View>
  );
};

export default GoodNews;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  news: {
    flex: 1,
  },
  titleNews: {
    fontSize: 16,
    maxWidth: '85%',
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  dateNews: {
    fontSize: 12,
    marginTop: 4,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
  imageNews: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
});
