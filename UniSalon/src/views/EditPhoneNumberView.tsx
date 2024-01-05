import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../constant/FontSize';
import {blues} from '../constant/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditPhoneNumberView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
        <Text style={styles.TxtTitleAppBar}>Edit Phone Number</Text>
      </View>
      <Text style={styles.txtEnterPhoneNumber}>Enter Phone Number</Text>
      <View style={styles.RowVerifyCode}>
        <View style={styles.FrmNumber}>
          <View style={styles.StyleDivider}>
            <Text style={styles.txt855}>+855</Text>
            <View style={styles.divider}></View>
          </View>
          <TextInput
            placeholderTextColor={'black'}
            style={styles.txtInput}
            value="889246027"
          />
        </View>
        <View style={styles.btnSend}>
          <Text style={styles.txtSend}>Send</Text>
        </View>
      </View>
      <View style={styles.frmCode}>
        <TextInput
          placeholderTextColor={'grey'}
          placeholder="Code"
          style={{padding: 0, color: 'black'}}
        />
      </View>
      <View style={styles.btnSave}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
          Save
        </Text>
      </View>
    </View>
  );
};

export default EditPhoneNumberView;

const styles = StyleSheet.create({
  txtSend: {
    fontSize: FontSize.font16,
    color: 'white',
    fontWeight: 'bold',
  },
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
  txtEnterPhoneNumber: {
    textAlign: 'center',
    marginTop: '10%',
    color: blues,
    fontSize: FontSize.font16,
  },
  RowVerifyCode: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
  },
  divider: {
    width: 1.8,
    height: '100%',
    backgroundColor: 'gray',
  },
  StyleDivider: {
    flexDirection: 'row',
  },
  frmNameOther: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
  },
  txtInput: {
    padding: 0,
    margin: 0,
    color: 'black',
    fontSize: 12.5,
    marginLeft: 12,
  },
  FrmNumber: {
    width: '75%',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  txt855: {
    fontSize: 12.5,
    marginRight: 12,
    paddingTop: 7,
    color: 'black',
  },
  btnSend: {
    width: '25%',
    padding: 15,
    backgroundColor: blues,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frmCode: {
    marginTop: 15,
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 7,
  },
  btnSave: {
    padding: 10,
    backgroundColor: '#16247d',
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13
  },
});
