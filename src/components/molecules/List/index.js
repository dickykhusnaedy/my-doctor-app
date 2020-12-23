import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconHelp,
  IconLanguage,
  IconNext,
  IconRate,
  IconUser,
  IL_PhotoNull,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({image, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconUser />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconUser />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? (
        <Icon />
      ) : (
        <Image
          source={image.uri.length > 1 ? image : IL_PhotoNull}
          style={styles.imageDoctor}
        />
      )}
      <View style={styles.wrapperListChat}>
        <Text style={styles.nameDoctor}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: 'space-between',
  },
  wrapperListChat: {
    flex: 1,
    marginLeft: 16,
  },
  imageDoctor: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  nameDoctor: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
  },
  desc: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
  },
});
