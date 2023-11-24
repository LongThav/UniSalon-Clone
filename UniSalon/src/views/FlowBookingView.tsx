import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
  Platform,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {FontSize} from '../constant/FontSize';
import {TimePickerModal} from 'react-native-paper-dates';
import Calendar from 'react-native-calendars/src/calendar';

import DateTimePicker from '@react-native-community/datetimepicker';

const FlowBookingView = () => {
  const navigation: any = useNavigation();
  const [showModul, setModel] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({}) => {
      setVisible(false);
      console.log({});
    },
    [setVisible],
  );

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime =
      'Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);

    console.log(fDate + '(' + fTime + ')');
  };

  const showMode = (current: any) => {
    setShow(true);
    setMode(current);
  };
  // const onChange = (event:any, selectedDate:any) => {
  //   const currentDate = selectedDate;
  //   setShow(false);
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode:any) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

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
          size={18}
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
          <Ionicons name="business-outline" color={'grey'} size={18}></Ionicons>
          <View
            style={{
              width: 1,
              height: '100%',
              backgroundColor: 'black',
              marginHorizontal: 15,
            }}></View>
          <Text style={{fontSize: FontSize.font14, color: 'grey'}}>
            មែន ស្តាយ
          </Text>
        </View>
        <View style={styles.Form1}>
          <Ionicons
            name="phone-portrait-outline"
            color={'grey'}
            size={18}></Ionicons>
          <View
            style={{
              width: 1,
              height: '100%',
              backgroundColor: 'black',
              marginHorizontal: 15,
            }}></View>
          <Text style={{fontSize: FontSize.font14, color: 'grey'}}>
            715636246
          </Text>
        </View>
        <View style={styles.Form1}>
          <EvilIcons
            name="location"
            color={'grey'}
            size={18}
            style={{marginTop: 5}}></EvilIcons>
          <View
            style={{
              width: 1,
              height: '100%',
              backgroundColor: 'black',
              marginHorizontal: 15,
            }}></View>
          <Text style={{fontSize: FontSize.font14, color: 'grey'}}>
            103 St 512, Phnom Penh, Cambodia
          </Text>
        </View>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Booking Information
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => showMode('date')}>
            <View style={styles.SelectDay}>
              <AntDesign
                name="clockcircleo"
                color={'grey'}
                size={18}></AntDesign>
              <View
                style={{
                  width: 1,
                  height: 25,
                  backgroundColor: 'black',
                  marginHorizontal: 15,
                }}></View>
              <Text style={{fontSize: FontSize.font14, color: 'black'}}>
                Mon,30 Oct 2023
              </Text>
            </View>
            <Modal visible={showModul} animationType="fade">
              <Calendar style={{borderRadius: 10, elevation: 4, margin: 10}} />
            </Modal>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={()=>{
            //   console.log("hi")
            //   setVisible(true)
            // }}
            onPress={() => showMode('time')}>
            <View style={styles.SelectHour}>
              <AntDesign
                name="clockcircleo"
                color={'grey'}
                size={18}></AntDesign>
              <View
                style={{
                  width: 1,
                  height: '100%',
                  backgroundColor: 'grey',
                  marginHorizontal: 15,
                }}></View>
              <Text style={{fontSize: FontSize.font14, color: 'black'}}>
                11:17
              </Text>
            </View>
            <TimePickerModal
              visible={visible}
              onDismiss={onDismiss}
              onConfirm={onConfirm}
              hours={12}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Form2}>
          <AntDesign name="infocirlceo" color={'black'} size={18}></AntDesign>
          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: 'black',
              marginHorizontal: 15,
            }}></View>
          {/* <Text style={{fontSize: FontSize.font14, color: 'grey'}}>
            Booking Note...(Optional)
          </Text> */}
          <TextInput
            placeholder="Booking Note..."
            style={{
              height: 20,
              width: 'auto',
              padding: 0,
              fontSize: 14,
              color: 'grey',
            }}
            placeholderTextColor={'grey'}></TextInput>
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
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlowBookingView;

const styles = StyleSheet.create({
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
  Form1: {
    marginTop: 15,
    width: 'auto',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: '#f2f2f2',
    verticalAlign: 'middle',
    borderRadius: 4,
  },
  SelectDay: {
    // width: '50%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    verticalAlign: 'middle',
    backgroundColor: '#f2f2f2',
    marginHorizontal: 15,
    borderRadius: 8,
  },
  SelectHour: {
    // width: '40%',
    paddingVertical: 15,
    flexDirection: 'row',
    verticalAlign: 'middle',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  Form2: {
    marginTop: '3.5%',
    width: '93%',
    height: 100,
    paddingRight: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: '#f2f2f2',
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

// https://medium.com/@dexiouz/step-by-step-guide-on-how-to-change-background-and-text-color-of-android-date-time-picker-in-react-fbf1a7dea17e
