import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyImageDocter1} from '../../assets';
import {Header, ListChatDoctor} from '../../components';
import {colors} from '../../utils';

const ChoooseDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <ListChatDoctor
        type="dark"
        image={DummyImageDocter1}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.push('Chatting')}
      />
      <ListChatDoctor
        type="dark"
        image={DummyImageDocter1}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.push('Chatting')}
      />
      <ListChatDoctor
        type="dark"
        image={DummyImageDocter1}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.push('Chatting')}
      />
      <ListChatDoctor
        type="dark"
        image={DummyImageDocter1}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.push('Chatting')}
      />
    </View>
  );
};

export default ChoooseDoctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
