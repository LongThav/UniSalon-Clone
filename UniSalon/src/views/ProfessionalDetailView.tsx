import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontSize} from '../constant/FontSize';

const {width, height} = Dimensions.get('window');

export const ProfessionalDetailView = (props: any) => {
  const {name} = props.route.params;
  console.log('data', name);
  const {role} = props.route.params;
  console.log('role: ', role);
  const {rate} = props.route.params;
  const {phone} = props.route.params;
  const {mail} = props.route.params;
  const {location} = props.route.params;
  const {professional} = props.route.params;
  const navigation: any = useNavigation();
  return (
    <View style={styles.ScrollBody}>
      <SafeAreaView>
        <View style={styles.AppBar}>
          <AntDesign
            onPress={() => {
              console.log('Back');
              navigation.goBack();
            }}
            name="arrowleft"
            color={'white'}
            style={{position: 'absolute', left: 15, marginTop: 15}}
            size={18}></AntDesign>
          <Text style={styles.TxtTitleAppBar}>Professional Detail</Text>
        </View>
        <ScrollView
          style={{marginBottom: height * 0.08}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.Cover}>
            <Image
              style={{flex: 1, height: undefined, width: undefined}}
              source={require('../../assets/imgs/cover.jpg')}></Image>
          </View>
          <View style={styles.Profile}>
            <Image
              style={{flex: 1, width: 100, height: 100, borderRadius: 100 / 2}}
              source={require('../../assets/imgs/img1.jpg')}></Image>
          </View>
          <Text style={styles.txtName}>
            {role} {name}
          </Text>
          <Text style={styles.txtStar}>⭐⭐⭐⭐⭐</Text>
          <Text style={styles.txtReview}>1 Review</Text>
          <View
            style={{
              width: 'auto',
              height: 1,
              backgroundColor: 'grey',
              marginTop: 7,
            }}></View>
          <Text style={styles.txtProfessional}>Professional Information</Text>
          <View style={styles.frmData}>
            <Ionicons name="call-outline" size={18} color={'black'} />
            <Text
              style={{
                fontSize: FontSize.font14,
                color: 'black',
                marginLeft: 15,
              }}>
              {phone}
            </Text>
          </View>
          <View style={styles.frmData}>
            <Ionicons name="person-outline" size={18} color={'black'} />
            <Text
              style={{
                fontSize: FontSize.font14,
                color: 'black',
                marginLeft: 15,
              }}>
              {professional}
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
              {mail}
            </Text>
          </View>
          <View style={styles.frmDataII}>
            <Ionicons
              name="location-outline"
              size={18}
              color={'black'}
              style={{marginTop: 8}}
            />
            <Text
              style={{
                fontSize: FontSize.font14,
                color: 'black',
                marginLeft: 15,
                flex: 1,
              }}>
              {location}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 15}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: '#6eaec7',
              }}>
              <Ionicons
                name="mail-outline"
                size={18}
                color={'white'}
                style={{alignSelf: 'center', marginTop: 5}}
              />
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: '#ff743a',
                marginLeft: 10,
              }}>
              <Ionicons
                name="call-outline"
                size={18}
                color={'white'}
                style={{alignSelf: 'center', marginTop: 5}}
              />
            </View>
          </View>
          <Text
            style={{
              paddingTop: 15,
              paddingLeft: 15,
              color: 'black',
              fontWeight: 'bold',
              fontSize: FontSize.font14,
            }}>
            Service
          </Text>
          <View
            style={{
              width: 100,
              height: 32,
              borderWidth: 0.5,
              borderRadius: 8,
              marginLeft: 15,
              marginTop: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: FontSize.font14,
                color: 'blue',
                marginTop: 5,
              }}>
              កាត់សក់បុរស
            </Text>
          </View>
          <Text
            style={{
              fontSize: FontSize.font14,
              color: 'black',
              paddingLeft: 15,
              paddingTop: 15,
              fontWeight: 'bold',
            }}>
            Bio
          </Text>
          <View
            style={{
              width: 'auto',
              height: height * 0.2,
              borderWidth: 0.5,
              marginHorizontal: 15,
              marginVertical: 15,
              borderRadius: 10,
            }}>
            <Text
              style={{
                paddingLeft: 15,
                paddingTop: 10,
                color: 'black',
                fontSize: FontSize.font14,
              }}>
              បទពិសោធន៏ 14ឆ្នាំ
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  TxtTitleAppBar: {
    fontSize: FontSize.font14,
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
  ScrollBody: {
    backgroundColor: 'white',
    flex: 1,
  },
  txtName: {
    color: 'grey',
    textAlign: 'center',
    fontSize: FontSize.font14,
    marginTop: 13,
    fontWeight: 'bold',
  },
  txtStar: {
    color: 'grey',
    textAlign: 'center',
    fontSize: FontSize.font12,
    marginTop: 8,
    fontWeight: 'bold',
  },
  txtReview: {
    textDecorationLine: 'underline',
    color: 'grey',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: FontSize.font12,
  },
  txtProfessional: {
    paddingLeft: 15,
    paddingTop: 15,
    fontSize: 18,
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
  frmDataII: {
    paddingHorizontal: 10,
    paddingTop: 10,
    verticalAlign: 'middle',
    flexDirection: 'row',
    backgroundColor: '#eef1f6',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    paddingBottom: 20,
  },
});
