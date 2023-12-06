import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../constant/FontSize';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const {width, height} = Dimensions.get('window');

const ProfileView = () => {
  const navigation: any = useNavigation();
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
        <Text style={styles.TxtTitleAppBar}>Profile</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white'}}>
          <View style={styles.Cover}>
            <Image
              style={{flex: 1, height: undefined, width: undefined}}
              source={require('../../assets/imgs/cover.jpg')}></Image>
            <View style={styles.iconCemeraCover}>
              <Entypo size={18} color={'black'} name="camera"></Entypo>
            </View>
          </View>

          <View style={styles.Profile}>
            <Image
              style={{flex: 1, width: 100, height: 100, borderRadius: 100 / 2}}
              source={require('../../assets/imgs/img1.jpg')}></Image>
          </View>
          <View style={styles.iconProfile}>
            <Entypo size={18} color={'black'} name="camera"></Entypo>
          </View>
          <View>
            <Text style={styles.txtName}>LongThav SiPav E1</Text>
            <Text style={styles.borderPoint}>0 Point</Text>
          </View>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1.3,
            backgroundColor: '#f2f2f2',
            marginTop: 13,
          }}></View>
        <View style={styles.FlexRowTitle}>
          <Text style={styles.txtAccount}>Account</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              console.log('HI');
              navigation.push('EditProfileView');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: FontSize.font16,
                  color: '#16247d',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                Edit
              </Text>
              <MaterialCommunityIcons
                color={'#16247d'}
                size={20}
                name="account-edit-outline"></MaterialCommunityIcons>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.frmData}>
          <Ionicons name="person-outline" size={18} color={'black'} />
          <Text
            style={{
              fontSize: FontSize.font14,
              color: 'black',
              marginLeft: 15,
            }}>
            LongThav SiPav E1
          </Text>
        </View>
        <View style={styles.frmData}>
          <Ionicons name="mail-outline" size={18} color={'black'} />
          <Text
            style={{
              fontSize: FontSize.font14,
              color: 'black',
              marginLeft: 15,
            }}>
            longthavsipav69@gmail.com
          </Text>
        </View>
        <View style={styles.frmData}>
          <AntDesign name="infocirlceo" color={'grey'} size={18}></AntDesign>
        </View>
        <View style={styles.frmData1}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="call-outline" size={18} color={'black'} />
          </View>
          <Text
            onPress={()=>{
              console.log("Hello Bro");
              navigation.push('EditPhoneNumberView');
            }}
            style={{
              fontSize: FontSize.font14,
              color: 'blue',
              fontWeight: 'bold',
              marginLeft: 15,
              textDecorationLine: 'underline',
            }}>
            Edit
          </Text>
        </View>
        <Text style={styles.txtSecurity}>Security</Text>
        {/* <View style={styles.frmSecurity}>

        </View> */}
        <View style={styles.frmDataSecurity}>
          <View style={{flexDirection: 'row'}}>
            <Octicons name="lock" size={18} color={'black'} />
            <Text
              style={{
                fontSize: FontSize.font14,
                color: 'black',
                marginLeft: 15,
              }}>
              ***************
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.push('ChangePasswordView');
            }}>
            <Text style={styles.txtEdit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  Cover: {
    width: '100%',
    height: 120,
    backgroundColor: 'grey',
  },
  Profile: {
    // position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'green',
    alignSelf: 'center',
    // marginTop: '2%'m
    marginTop: -50,
  },
  iconCemeraCover: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 35,
    height: 35,
    backgroundColor: 'grey',
    borderRadius: 35 / 2,
    marginRight: 20,
    marginBottom: 20,
    alignItems: 'center',
    paddingTop: 7,
  },
  iconProfile: {
    position: 'absolute',
    bottom: height * 0.12,
    right: width * 0.35,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 40 / 2,
  },
  txtName: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: FontSize.font16,
    color: 'black',
    fontWeight: 'bold',
  },
  borderPoint: {
    width: 80,
    height: 38,
    backgroundColor: '#2dfe54',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 8,
    color: 'white',
    marginTop: 15,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  FlexRowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingTop: 15,
  },
  txtAccount: {
    fontSize: FontSize.font16,
    fontWeight: 'bold',
    color: 'black',
  },
  frmData: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    verticalAlign: 'middle',
    flexDirection: 'row',
    backgroundColor: '#eef1f6',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
  },
  frmDataSecurity: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    verticalAlign: 'middle',
    flexDirection: 'row',
    backgroundColor: '#eef1f6',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  frmData1: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    verticalAlign: 'middle',
    flexDirection: 'row',
    backgroundColor: '#eef1f6',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  txtSecurity: {
    fontSize: FontSize.font16,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
    paddingTop: 15,
  },
  frmSecurity: {},
  txtEdit: {
    fontSize: FontSize.font14,
    color: 'blue',
    fontWeight: 'bold',
    marginLeft: 15,
    textDecorationLine: 'underline',
  },
});
