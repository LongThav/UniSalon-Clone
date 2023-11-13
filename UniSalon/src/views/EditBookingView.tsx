import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontSize} from '../constant/FontSize';

export const EditBookingView = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      {/* <View style={styles.AppBar}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    navigation.goBack();
                }}>
                    <AntDesign name='arrowleft' color={'white'} size={28}></AntDesign>
                </TouchableOpacity>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold', paddingHorizontal: '28.8%' }}>Edit Booking</Text>
            </View> */}
      <View style={styles.Appbar}>
        <AntDesign
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}
          name="arrowleft"
          color={'white'}
          size={18}
          style={{position: 'absolute', left: 15, top: 15}}></AntDesign>
        <Text style={styles.TitleAppbar}>Edit Booking</Text>
      </View>
      <ScrollView style={{marginTop: 15, paddingHorizontal: 15}}>
        <Text
          style={{
            fontSize: FontSize.font14,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Booking Information
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={styles.SelectDay}>
            <AntDesign name="clockcircleo" size={18}></AntDesign>
            <View
              style={{
                width: 1,
                height: '100%',
                backgroundColor: 'grey',
                marginHorizontal: 15,
              }}></View>
            <Text style={{fontSize: FontSize.font12}}>Mon,30 Oct 2023</Text>
          </View>
          <View style={styles.SelectHour}>
            <AntDesign name="clockcircleo" size={18}></AntDesign>
            <View
              style={{
                width: 1,
                height: '100%',
                backgroundColor: 'grey',
                marginHorizontal: 15,
              }}></View>
            <Text style={{fontSize: FontSize.font12}}>11:17</Text>
          </View>
        </View>
        <View style={styles.Form2}>
          <AntDesign name="infocirlceo" size={18}></AntDesign>
          <View
            style={{
              width: 1,
              height: '40%',
              backgroundColor: 'grey',
              marginHorizontal: 15,
            }}></View>
          <Text style={{fontSize: FontSize.font12}}>
            Booking Note...(Optional)
          </Text>
          {/* <TextInput></TextInput> */}
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.BtnSave}>
          <Text style={{fontSize: FontSize.font13, color: 'white'}}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    paddingHorizontal: 15,
    position: 'absolute',
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
  BtnSave: {
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16247d',
    marginTop: '10%',
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
});
