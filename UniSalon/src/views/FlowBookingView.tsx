import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const FlowBookingView = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.Appbar}>
        <AntDesign
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}
          name="arrowleft"
          color={'white'}
          size={28}
          style={{position: 'absolute', left: 15, top: 15}}></AntDesign>
        <Text style={styles.TitleAppbar}>MAKE A BOOKING</Text>
      </View>
      <ScrollView>
        <Text
          style={{
            fontSize: 18,
            paddingHorizontal: 15,
            paddingVertical: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Shop Information
        </Text>

        <View style={styles.Form1}>
          <Ionicons name="business-outline" color={'grey'} size={25}></Ionicons>
          <View
            style={{
              width: 1,
              height: '100%',
              backgroundColor: 'black',
              marginHorizontal: 15,
            }}></View>
          <Text style={{fontSize: 18, color: 'grey'}}>មែន ស្តាយ</Text>
        </View>
        <View style={styles.Form1}>
          <Ionicons
            name="phone-portrait-outline"
            color={'grey'}
            size={25}></Ionicons>
          <View
            style={{
              width: 1,
              height: '100%',
              backgroundColor: 'black',
              marginHorizontal: 15,
            }}></View>
          <Text style={{fontSize: 18, color: 'grey'}}>715636246</Text>
        </View>
        <View style={styles.Form1}>
          <EvilIcons
            name="location"
            color={'grey'}
            size={25}
            style={{marginTop: 5}}></EvilIcons>
          <View
            style={{
              width: 1,
              height: '100%',
              backgroundColor: 'black',
              marginHorizontal: 15,
            }}></View>
          <Text style={{fontSize: 16, color: 'grey'}}>
            103 St 512, Phnom Penh, Cambodia
          </Text>
        </View>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Booking Information
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.SelectDay}>
            <AntDesign name="clockcircleo" color={'grey'} size={20}></AntDesign>
            <View
              style={{
                width: 1,
                height: 25,
                backgroundColor: 'black',
                marginHorizontal: 15,
              }}></View>
            <Text style={{fontSize: 15, color: 'black'}}>Mon,30 Oct 2023</Text>
          </View>
          <View style={styles.SelectHour}>
            <AntDesign name="clockcircleo" color={'grey'} size={20}></AntDesign>
            <View
              style={{
                width: 1,
                height: '100%',
                backgroundColor: 'grey',
                marginHorizontal: 15,
              }}></View>
            <Text style={{fontSize: 15, color: 'black'}}>11:17</Text>
          </View>
        </View>
        <View style={styles.Form2}>
          <AntDesign name="infocirlceo" color={'black'} size={25}></AntDesign>
          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: 'black',
              marginHorizontal: 15,
            }}></View>
          <Text style={{fontSize: 18, color: 'grey'}}>
            Booking Note...(Optional)
          </Text>
          {/* <TextInput></TextInput> */}
        </View>
        <TouchableOpacity
         activeOpacity={0.8}
          onPress={() => {
            console.log('Push next screen');
            navigation.push('AssignProfessorView');
          }}>
          <View style={styles.BtnNext}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlowBookingView;

const styles = StyleSheet.create({
  Appbar: {
    width: 'auto',
    height: 60,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  TitleAppbar: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  Form1: {
    marginTop: 15,
    width: 'auto',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: '#eef2fa',
    verticalAlign: 'middle',
    borderRadius: 4,
  },
  SelectDay: {
    width: '50%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    verticalAlign: 'middle',
    backgroundColor: '#eef2fa',
    marginHorizontal: 15,
    borderRadius: 8,
  },
  SelectHour: {
    width: '40%',
    paddingVertical: 15,
    flexDirection: 'row',
    verticalAlign: 'middle',
    backgroundColor: '#eef2fa',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Form2: {
    marginTop: '3.5%',
    width: '93%',
    height: 100,
    paddingRight: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: '#eef2fa',
    verticalAlign: 'middle',
    borderRadius: 4,
    paddingLeft: 10,
  },
  BtnNext: {
    width: '92%',
    marginTop: '15%',
    backgroundColor: '#16247d',
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
});
