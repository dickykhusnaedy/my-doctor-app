import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DummyImageDocter1,
  DummyImageDocter2,
  DummyImageDocter3,
} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = ({navigation}) => {
  const [doctor] = useState([
    {
      id: 1,
      image: DummyImageDocter1,
      name: 'Alexander Jannie',
      chat: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      image: DummyImageDocter2,
      name: 'Nairobi Putri Hayza',
      chat: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      image: DummyImageDocter3,
      name: 'John McParker Steve',
      chat: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctor.map((doctors) => {
          return (
            <List
              key={doctors.id}
              image={doctors.image}
              name={doctors.name}
              desc={doctors.chat}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 16,
    marginLeft: 16,
  },
});
