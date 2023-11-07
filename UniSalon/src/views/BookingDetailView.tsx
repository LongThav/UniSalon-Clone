import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const {width, height} = Dimensions.get('window');

export const BookingDetailView = () => {
  const navigation: any = useNavigation();
  const createButtonAlert = () =>
    Alert.alert('Submit Booking', 'Are you sure to submit booking', [
      {
        text: 'NO',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'YES', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={28}></AntDesign>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold',
            paddingHorizontal: '27.5%',
          }}>
          Booking Detail
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: '14%', paddingHorizontal: 15, marginBottom: '15%'}}>
        <Text
          style={{
            fontSize: 18,
            color: '#16247d',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Shop Information
        </Text>
        <View
          style={{flexDirection: 'row', paddingLeft: '10%', marginTop: '5%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Name:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            មែន ស្តាយ
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: '9%', marginTop: 10}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Phone:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            715636246
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '5.5%', marginTop: 10}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Address:{' '}
          </Text>
          <Text
            style={{
              fontSize: 16.5,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            103 St 512, Phnom Penh, Cambodia
          </Text>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: 'grey',
            marginTop: '8%',
          }}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              paddingVertical: 20,
              fontSize: 18,
              color: '#16247d',
              fontWeight: 'bold',
            }}>
            Schedule Booking
          </Text>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('Pressed');
              navigation.push('EditBookingView');
            }}>
            <View style={{paddingVertical: 20, flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#16247d',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                Edit
              </Text>
              <MaterialIcons
                name="edit"
                size={25}
                color={'#16247d'}></MaterialIcons>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '13%', marginTop: '0%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Date:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Tuesday, 31 October 2023
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '12%', marginTop: '0%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Time:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            08:33 AM
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '9.5%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Status:{' '}
          </Text>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 3,
              backgroundColor: 'green',
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
              Booking
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: 'grey',
            marginTop: '8%',
          }}></View>
        <Text
          style={{
            paddingVertical: 20,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#16247d',
          }}>
          Professors Selection
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              backgroundColor: 'grey',
            }}>
            <Image
              style={{flex: 1, width: 70, height: 70, borderRadius: 70 / 2}}
              source={require('../../assets/imgs/img1.jpg')}></Image>
          </View>
          <View style={{paddingLeft: 15}}>
            <Text
              style={{
                fontSize: 18,
                color: '#16247d',
                fontWeight: 'bold',
                paddingBottom: 10,
              }}>
              ជាង​ សុផា
            </Text>
            <Text style={{fontWeight: 'bold', paddingBottom: 8}}>
              Professor of Men Style
            </Text>
            <Text style={{fontWeight: 'bold'}}>098987487</Text>
          </View>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: 'grey',
            marginTop: '8%',
          }}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              paddingVertical: 20,
              fontSize: 18,
              color: '#16247d',
              fontWeight: 'bold',
            }}>
            Services Selection
          </Text>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('Pressed');
            }}>
            <View style={{paddingVertical: 20, flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#16247d',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                Add Services
              </Text>
              <Ionicons name="add" size={25} color={'#16247d'}></Ionicons>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: 'grey',
            marginTop: '5%',
          }}></View>
        <Text
          style={{
            fontSize: 18,
            color: '#16247d',
            fontWeight: 'bold',
            paddingVertical: 20,
          }}>
          Payment Summary
        </Text>
        <View
          style={{flexDirection: 'row', paddingLeft: '18%', marginTop: '0%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Total Amount:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            $ 20.50
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '27%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Discount:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            $ 0.00
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '21.6%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Grand Total:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'red',
              paddingRight: 15,
            }}>
            $ 20.50
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '20.7%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Total Points:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            0 pts
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '21.5%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Spent Point:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'blue',
              paddingRight: 15,
              textDecorationLine: 'underline',
            }}>
            0 pts
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '32%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Status:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Unpaid
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '16.5%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Payment Type:{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            None
          </Text>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: 'grey',
            marginTop: '5%',
          }}></View>
      </ScrollView>
      <TouchableOpacity activeOpacity={1} onPress={createButtonAlert}>
        <View style={styles.BottomNavigationBar}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Submit Booking
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    paddingHorizontal: 15,
    position: 'absolute',
  },
  BottomNavigationBar: {
    width: '100%',
    bottom: 0,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#509cdb',
    position: 'absolute',
  },
});
