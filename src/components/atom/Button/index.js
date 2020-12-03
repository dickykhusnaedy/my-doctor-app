import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.title(type)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  title: (type) => ({
    fontSize: 18,
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : 'white',
    fontFamily: 'Nunito-SemiBold',
  }),
});
