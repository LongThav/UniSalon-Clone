import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const ForgotPasswordView = () => {
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
      <Text
        style={{
          textAlign: 'center',
          marginTop: height * 0.05,
          fontSize: 19,
          color: 'black',
        }}>
        Forgot Password
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: height * 0.05,
          fontSize: 17,
          color: 'grey',
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
      <View style={styles.BtnLogin}>
        <Text style={styles.TxtLogin}>Next</Text>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordView;

const styles = StyleSheet.create({
  FormI: {
    width: width * 0.71,
    paddingVertical: 10,
    flexDirection: 'row',
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
    paddingVertical: 10,
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
