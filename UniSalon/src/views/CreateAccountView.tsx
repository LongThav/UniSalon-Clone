import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../constant/FontSize';
import { blues } from '../constant/color';

const {width, height} = Dimensions.get('window');

const CreateAccountView = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <AntDesign
        onPress={() => {
          navigation.goBack();
        }}
        name="arrowleft"
        color={'grey'}
        size={28}
        style={{paddingLeft: 15, paddingTop: 10}}></AntDesign>
      <View
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
        }}>
        <Image
          style={{flex: 1, width: 100, height: 100, borderRadius: 12}}
          source={require('../../assets/imgs/logo.jpg')}></Image>
      </View>
      <Text
        style={{
          marginTop: height * 0.05,
          textAlign: 'center',
          fontSize: 18,
          color: blues,
        }}>
        Enter Phone Number
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          marginTop: height * 0.08,
        }}>
        <View style={styles.FormI}>
          <TextInput
            placeholder="+885 | Phone Number"
            placeholderTextColor={'black'}
            style={{padding: 0, color: 'black'}}></TextInput>
        </View>
        <View style={styles.Submit}>
          <Text style={{fontSize: 18, color: 'white'}}>Send</Text>
        </View>
      </View>
      <View style={styles.FormII}>
        <TextInput
          placeholder="Code"
          placeholderTextColor={'black'}
          style={{padding: 0, color: 'grey'}}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: height * 0.05,
          marginHorizontal: 15,
          width: width * 0.8,
        }}>
        <Text style={{fontSize: FontSize.font15, color: blues}}>
          By sign up, you agree to our
        </Text>
        <Text
          style={{
            fontSize: FontSize.font15,
            color: blues,
            textDecorationLine: 'underline',
          }}>
          Term and Conditions.
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.push('CreatePasswordView');
        }}>
        <View style={styles.BtnLogin}>
          <Text style={styles.TxtLogin}>Next</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateAccountView;

const styles = StyleSheet.create({
  FormI: {
    width: width * 0.71,
    paddingVertical: 10,
    // marginLeft: 15,
    flexDirection: 'row',
    // marginTop: '14%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  Submit: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#16247d',
    alignContent: 'center',
    alignItems: 'center',
  },
  FormII: {
    paddingVertical: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 25,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  BtnLogin: {
    backgroundColor: '#16247d',
    paddingVertical: 15,
    marginHorizontal: 15,
    marginTop: height * 0.08,
    alignContent: 'center',
    alignItems: 'center',
  },
  TxtLogin: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
