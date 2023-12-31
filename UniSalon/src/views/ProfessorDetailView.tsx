import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Divider} from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {FontSize} from '../constant/FontSize';

const {width, height} = Dimensions.get('window');

const ProfessorDetailView = (props: any) => {
  const navigation: any = useNavigation();
  const {name} = props.route.params;
  console.log('Name: ', name);
  console.log(name.charAt(0));
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={20}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Professor Information</Text>
        <AntDesign
          name="hearto"
          size={18}
          color={'white'}
          style={{marginRight: 0}}></AntDesign>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 10}}>
        <View style={styles.cover}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/cover.jpg')}></Image>
        </View>
        <View style={styles.CicleProfile}>
          <Text
            style={{
              flex: 1,
              fontSize: 35,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {name.charAt(0)}
          </Text>
        </View>
        <Text style={styles.txtName}>{name}</Text>
        <Text style={styles.txtStar}>⭐⭐⭐⭐⭐</Text>
        <Text style={styles.txtReview}>0 Review</Text>
        <View
          style={{
            width: 'auto',
            height: 0.3,
            backgroundColor: '#dedede',
            marginTop: 13,
          }}></View>
        <Text
          style={{
            fontSize: FontSize.font14,
            color: 'black',
            fontWeight: 'bold',
            paddingLeft: 15,
            paddingTop: 15,
          }}>
          Account
        </Text>
        <View style={styles.FrmName}>
          <Ionicons
            name="business-outline"
            size={18}
            color={'black'}></Ionicons>
          <Text
            style={{
              fontSize: FontSize.font12,
              color: 'black',
              paddingLeft: 10,
            }}>
            មែន ស្តាយ
          </Text>
        </View>
        <View style={styles.FrmName}>
          <Ionicons name="mail-outline" size={18} color={'black'}></Ionicons>
          <Text
            style={{
              fontSize: FontSize.font12,
              color: 'black',
              paddingLeft: 10,
            }}>
            longthavsipav@gmail.com
          </Text>
        </View>
        <View style={styles.BoxText}>
          <AntDesign name="infocirlceo" size={18} color={'grey'}></AntDesign>
        </View>
        <View style={styles.FrmName}>
          <Ionicons name="call-outline" size={18} color={'black'}></Ionicons>
        </View>
        <View style={styles.TxtLocation}>
          <Text
            style={{
              color: 'black',
              fontSize: FontSize.font12,
              fontWeight: 'bold',
            }}>
            Address
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.push('LocationShopView');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#16247d',
                  fontSize: FontSize.font12,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  paddingRight: 5,
                }}>
                Direction
              </Text>
              <Entypo name="location" color={'#16247d'} size={18}></Entypo>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.FrmName}>
          <EvilIcons name="location" size={20} color={'black'}></EvilIcons>
        </View>
      </ScrollView>
      <View style={styles.BottomBar}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            backgroundColor: '#1da1f2',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="mail-outline" size={18} color={'white'}></Ionicons>
        </View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            backgroundColor: '#ff743a',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            marginHorizontal: 15,
          }}>
          <Ionicons name="call-outline" size={18} color={'white'}></Ionicons>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.push('FlowBookingView');
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: '#16247d',
              width: width * 0.6,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: FontSize.font14,
                color: 'white',
                fontWeight: 'bold',
              }}>
              MAKE A BOOKING
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfessorDetailView;

const styles = StyleSheet.create({
  AppBar: {
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    backgroundColor: '#16247d',
    paddingTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SubText: {
    fontSize: FontSize.font14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cover: {
    width: 'auto',
    height: height * 0.2,
    backgroundColor: 'green',
  },
  CicleProfile: {
    paddingTop: 10,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#362204',
    alignSelf: 'center',
    marginTop: -40,
  },
  txtName: {
    textAlign: 'center',
    marginTop: 26,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  txtStar: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    color: 'yellow',
  },
  txtReview: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
    textDecorationLine: 'underline',
  },
  FrmName: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#edeff3',
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
  },
  BoxText: {
    padding: 15,
    backgroundColor: '#edeff3',
    flexDirection: 'row',
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 15,
  },
  TxtLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  BottomBar: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
