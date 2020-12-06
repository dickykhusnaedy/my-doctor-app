import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospital,
  IconHospitalActive,
  IconMessage,
  IconMessageActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    } else if (title === 'Messages') {
      return active ? <IconMessageActive /> : <IconMessage />;
    } else if (title === 'Hospitals') {
      return active ? <IconHospitalActive /> : <IconHospital />;
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.tabTitle(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tabTitle: (active) => ({
    marginTop: 4,
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: active ? colors.text.menuActive : colors.text.menuInactive,
  }),
});
