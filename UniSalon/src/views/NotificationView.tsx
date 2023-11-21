import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontSize} from '../constant/FontSize';

const data = [
  {
    id: '1',
    title: 'test24',
    date: '24 Oct 2023 at 10:52 am',
  },
  {
    id: '2',
    title: 'test24',
    date: '24 Oct 2023 at 10:52 am',
  },
  {
    id: '3',
    title: 'test24',
    date: '24 Oct 2023 at 10:52 am',
  },
  {
    id: '4',
    title: 'test24',
    date: '24 Oct 2023 at 10:52 am',
  },
  {
    id: '5',
    title: 'test24',
    date: '24 Oct 2023 at 10:52 am',
  },
  {
    id: '6',
    title: 'test24',
    date: '24 Oct 2023 at 10:52 am',
  },
];

const NotificationView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Appbar}>
        <AntDesign
          onPress={() => {
            navigation.goBack();
          }}
          name="arrowleft"
          color={'white'}
          size={18}
          style={{position: 'absolute', left: 15, top: 15}}></AntDesign>
        <Text style={styles.TitleAppbar}>Notifications</Text>
      </View>
      <ScrollView style={{}}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.card}>
              <View style={styles.circle}></View>
              <View style={styles.column}>
                <Text
                  style={{
                    fontSize: FontSize.font14,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {item.title}
                </Text>
                <Text style={{marginTop: 5, color: 'black'}}>Description</Text>
                <Text style={{marginTop: 5, color: 'black'}}>{item.date}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NotificationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Appbar: {
    width: 'auto',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  TitleAppbar: {
    fontSize: FontSize.font14,
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    borderBottomWidth: 0.5,
    marginTop: 15,
    borderColor: '#eef1f6',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#eef1f6',
  },
  column: {
    marginLeft: 15,
  },
});
