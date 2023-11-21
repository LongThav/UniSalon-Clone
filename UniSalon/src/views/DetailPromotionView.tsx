import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {FontSize} from '../constant/FontSize';
const {width} = Dimensions.get('window');

export const DetailPromotion = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={30}></AntDesign>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
            paddingLeft: '30%',
          }}>
          កាត់សក់បុរស
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.push('SubService');
        }}>
        <View style={styles.CardView}>
          <View style={styles.Image}>
            <Image
              style={{
                width: undefined,
                height: undefined,
                flex: 1,
                borderRadius: 8,
              }}
              source={require('../../assets/imgs/img1.jpg')}></Image>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              backgroundColor: 'white',
              width: '50%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 20,
              }}>
              <Text
                style={{
                  marginTop: 13,
                  marginBottom: 4,
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: FontSize.font14,
                }}>
                កាត់សក់បុរស
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 40,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#16247d',
                  paddingBottom: 4,
                  fontSize: FontSize.font12,
                }}>
                មែន ស្តាយ
              </Text>
              {/* <Text style={{ color: 'red', fontWeight: 'bold', paddingTop: 10,  }}>$ 5.00</Text> */}
              {/* <Text style={{ fontWeight: 'bold', color: 'red', textAlign: 'right', marginRight: 0 }}>Up</Text> */}
            </View>
            <Text style={{color: 'grey', fontSize: FontSize.font12}}>
              ⭐⭐⭐⭐⭐(3)
            </Text>
            <View style={{flex: 0}}>
              <Text
                numberOfLines={2}
                style={{
                  paddingVertical: 4,
                  color: 'grey',
                  fontSize: FontSize.font12,
                }}>
                ហាងយើងខ្ញុំផ្ដល់ជូននៅទាំងគុណភាណ និងអនាម័យ
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 15,
                  paddingRight: 0,
                }}>
                <FontAwesome6
                  name="location-dot"
                  style={{paddingRight: 5, marginTop: 4}}
                  color={'#16247d'}></FontAwesome6>
                <Text
                  style={{
                    color: '#16247d',
                    fontWeight: 'bold',
                    fontSize: FontSize.font12,
                  }}>
                  None
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 15,
                  marginLeft: 20,
                }}>
                <FontAwesome6
                  name="clock"
                  style={{paddingRight: 5, marginTop: 4}}
                  color={'#16247d'}></FontAwesome6>
                <Text
                  style={{
                    color: '#16247d',
                    fontWeight: 'bold',
                    fontSize: FontSize.font12,
                  }}>
                  Opening
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log('onPressed!!!');
                  }}></TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              marginRight: 15,
              marginTop: 15,
            }}>
            <Text style={{color: 'red', fontWeight: 'bold', paddingTop: 10}}>
              $ 5.00
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'red',
                textAlign: 'right',
                marginRight: 0,
              }}>
              Up
            </Text>
          </View>
          <AntDesign
            name="hearto"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              marginRight: 15,
              marginBottom: 13,
            }}
            size={20}
            color={'pink'}></AntDesign>

          {/* <View>
            <Text style={styles.txtTitle}>កាត់ សក់បុរស</Text>
            <Text style={styles.txtMenStyle}>មែន​ ស្តាយ</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'yellow'}}>⭐⭐⭐⭐⭐</Text>
              <Text style={{color: 'grey'}}>(4)</Text>
            </View>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>
              ហាងយើងខ្ញុំផ្ដល់ជូនទាំងគុណភាពនិងអ...
            </Text>
            <View style={{flexDirection: 'row',}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 15,
                  paddingRight: 0,
                }}>
                <FontAwesome6
                  name="location-dot"
                  style={{paddingRight: 5, marginTop: 4}}
                  color={'#16247d'}></FontAwesome6>
                <Text style={{color: '#16247d', fontWeight: 'bold'}}>None</Text>
              </View>
              <View style={{flexDirection: 'row', paddingVertical: 15}}>
                <FontAwesome6
                  name="clock"
                  style={{paddingRight: 5, marginTop: 4}}
                  color={'#16247d'}></FontAwesome6>
                <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                  Opening
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log('onPressed!!!');
                  }}>
                  <AntDesign
                    name="hearto"
                    style={{paddingTop: 2}}
                    size={20}
                    color={'pink'}></AntDesign>
                </TouchableOpacity>
              </View>
            </View>
          </View> */}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#16247d',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    // position: 'absolute'
  },
  CardView: {
    marginTop: 10,
    marginHorizontal: 7,
    width: 'auto',
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#f1f1f1',
    paddingVertical: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image: {
    width: 140,
    height: 140,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  txtTitle: {
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
  },
  txtMenStyle: {
    color: 'blue',
    fontWeight: 'bold',
    paddingVertical: 5,
    fontSize: 15,
  },
}); 
