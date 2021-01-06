import React, {useEffect, useState} from 'react';
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

const List = ({image, name, desc, type, onPress, icon, read, isMe}) => {
  const [colorText, setColorText] = useState(colors.text.secondary);
  const [fontText, setFontText] = useState(fonts.primary[300]);

  // this function for trim text
  const trimText = (text) => {
    let maxLength = 100;
    if (text.length > maxLength) {
      return text.substring(0, maxLength).trimEnd() + ' ...';
    } else {
      return text;
    }
  };

  useEffect(() => {
    if (read !== undefined) {
      if (read.length > 1) {
        setColorText(colors.text.secondary);
        setFontText(fonts.primary[300]);
      } else if (read.length === 0) {
        setColorText(colors.text.primary);
        setFontText(fonts.primary[600]);
      } else {
        if (read === 'kirim' && isMe) {
          setColorText(colors.text.secondary);
          setFontText(fonts.primary[300]);
        }
      }
    }
  }, [read, isMe]);

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
        {read !== undefined && (
          <Text style={styles.descReadAt(colorText, fontText)}>
            {trimText(desc)}
          </Text>
        )}
        {read === undefined && (
          <Text style={styles.desc}>{trimText(desc)}</Text>
        )}
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
  descReadAt: (colorText, fontText) => ({
    fontSize: 12,
    color: colorText,
    fontFamily: fontText,
  }),
});
