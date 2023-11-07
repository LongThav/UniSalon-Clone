import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Image} from '@rneui/themed';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const {width, height} = Dimensions.get('window');

const OrderDetailView = () => {
  const navigation: any = useNavigation();
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
          size={28}
          style={{position: 'absolute', left: 15, top: 15}}></AntDesign>
        <Text style={styles.TitleAppbar}>Order Detail</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: height * 0.01}}>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#16247d',
          }}>
          Shop Information
        </Text>
        <View style={styles.frmShpInfor}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Name: មែន ស្តាយ
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Phone: 0889246027
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Address: 103 St 512, Phnom Penh, Cambodia
          </Text>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: 'grey',
            margin: 15,
          }}></View>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#16247d',
          }}>
          Order Detail
        </Text>
        <View style={styles.frmShpInfor}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Date: Monday, 6 November 2023
          </Text>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              Status:{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                backgroundColor: 'green',
                paddingHorizontal: 15,
                paddingVertical: 2,
                borderRadius: 5,
              }}>
              Order
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: 'grey',
            margin: 15,
          }}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              paddingHorizontal: 15,
              paddingVertical: 15,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            Select Services
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                paddingHorizontal: 15,
                paddingVertical: 15,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#16247d',
                textDecorationLine: 'underline',
              }}>
              Add Services
            </Text>
            <Ionicons
              name="add"
              size={30}
              color={'#16247d'}
              style={{marginTop: 10, marginRight: 15}}></Ionicons>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                padding: 15,
                backgroundColor: '#f1f1f1',
                borderRadius: 8,
              }}>
              <Image
                style={{width: 40, height: 40, borderRadius: 8}}
                source={require('../../assets/imgs/make_up.png')}></Image>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 18, color: 'blue', fontWeight: 'bold'}}>
                Nail
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 'auto',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontWeight: 'bold',
                    marginRight: width * 0.3,
                  }}>
                  Point: 2pts
                </Text>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  $ 10.00(1)
                </Text>
              </View>
            </View>
          </View>
          <SimpleLineIcons name="options-vertical" size={20}></SimpleLineIcons>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: 'grey',
            marginHorizontal: 15,
            marginVertical: 30,
          }}></View>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingVertical: 0,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#16247d',
            marginBottom: 15,
          }}>
          Payment Summary
        </Text>
        <View style={styles.frmShpInfor}>
          <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 16}}>
            Total Payment: $ 10.00
          </Text>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 16,
              marginVertical: 5,
            }}>
            Discount: $ 0.00
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 16}}>
              Grand Total:
            </Text>
            <Text style={{color: 'red', fontWeight: 'bold', marginLeft: 5}}>
              $ 10.00
            </Text>
          </View>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 16,
              marginVertical: 5,
            }}>
            Total Point: 2 pts
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 16}}>
              Spend Point:
            </Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'bold',
                marginLeft: 5,
                textDecorationLine: 'underline',
              }}>
              {' '}
              0.00
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingVertical: 15, backgroundColor: '#6eaec7', alignContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Submit Order</Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailView;

const styles = StyleSheet.create({
  Appbar: {
    width: 'auto',
    height: 60,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  TitleAppbar: {
    fontSize: 18,
    color: 'white',
  },
  frmShpInfor: {
    marginHorizontal: 30,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
