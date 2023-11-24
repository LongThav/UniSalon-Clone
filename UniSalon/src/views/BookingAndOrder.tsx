import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const BookingAndOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={20}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Booking & Order</Text>
      </View>
      <View
        style={{
          backgroundColor: '#f1f1f1',
          flex: 1,
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
          paddingTop: '10%',
        }}>
        <Feather name="folder" size={60} color={'#ebebec'}></Feather>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#ebebec',
            paddingTop: '2%',
          }}>
          No Data
        </Text>
      </View>
    </View>
  );
};

export default BookingAndOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AppBar: {
    paddingHorizontal: 10,
    width: '100%',
    paddingBottom: 10,
    backgroundColor: '#16247d',
    paddingTop: '3%',
    flexDirection: 'row',
    verticalAlign: 'middle',
    justifyContent: 'center',
  },
  SubText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: '25%',
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: 10,
    marginLeft: 15,
  },
});
