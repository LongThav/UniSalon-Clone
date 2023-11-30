import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontSize} from '../constant/FontSize';
import {blues, grey} from '../constant/color';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const ChangePasswordView = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [newPassword, setNewPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  // Function to toggle the password visibility state
  const toggleOldPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPassword = () => {
    setNewPassword(!newPassword);
  };
  const toggleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.AppBar}>
        <AntDesign
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}
          name="arrowleft"
          color={'white'}
          style={{position: 'absolute', left: 0, top: 14, marginLeft: 15}}
          size={20}></AntDesign>
        <Text style={styles.TxtTitleAppBar}>Change Password</Text>
      </View>
      <Text style={styles.txtEnterPassword}>Enter your password</Text>
      <View style={{marginVertical: 5}}></View>
      <View style={styles.frmPassword}>
        <TextInput
          placeholder="Old Password"
          placeholderTextColor={'#aab8b6'}
          secureTextEntry={!showPassword}
          style={styles.txtPlaceholder}
        />
        <Feather
          onPress={toggleOldPassword}
          name={showPassword ? 'eye' : 'eye-off'}
          color={'#aab8b6'}
          size={20}
          style={{paddingTop: 4}}
        />
      </View>
      <View style={styles.frmPassword}>
        <TextInput
          placeholder="New Password"
          placeholderTextColor={'#aab8b6'}
          secureTextEntry={!newPassword}
          style={styles.txtPlaceholder}
        />
        <Feather
          onPress={toggleNewPassword}
          name={newPassword ? 'eye' : 'eye-off'}
          color={'#aab8b6'}
          size={20}
          style={{paddingTop: 4}}
        />
      </View>
      <View style={styles.frmPassword}>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={'#aab8b6'}
          secureTextEntry={!confirmPassword}
          style={styles.txtPlaceholder}
        />
        <Feather
          onPress={toggleConfirmPassword}
          name={confirmPassword ? 'eye' : 'eye-off'}
          color={'#aab8b6'}
          size={20}
          style={{paddingTop: 4}}
        />
      </View>
      <TouchableOpacity
          onPress={() => {
            console.log('Push next screen');
            // navigation.push('AssignProfessorView');
          }}>
          <View style={styles.BtnNext}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Change Password
            </Text>
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ChangePasswordView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AppBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  TxtTitleAppBar: {
    fontSize: FontSize.font16,
    color: 'white',
    fontWeight: 'bold',
  },
  txtEnterPassword: {
    textAlign: 'center',
    marginTop: height * 0.045,
    color: blues,
    fontSize: FontSize.font14,
  },
  frmPassword: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  txtPlaceholder: {
    padding: 0,
    // color: grey
    textDecorationLine: 'none'
  },
  BtnNext: {
    marginTop: 18,
    backgroundColor: '#16247d',
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
});
