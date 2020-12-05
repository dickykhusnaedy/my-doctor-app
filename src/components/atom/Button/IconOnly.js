import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconBackDark} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <Text>Putih</Text>;
    }
    return <IconBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
