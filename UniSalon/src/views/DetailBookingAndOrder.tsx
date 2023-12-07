import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontSize} from '../constant/FontSize';
import {blues, grey} from '../constant/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const {width, height} = Dimensions.get('window');

const ServiceSelectionData = [
  {
    id: '1',
    img: require('../../assets/imgs/salon1.png'),
    title: 'Haircut for kids',
    price: '$ 16.00',
    total: '2',
    point: '2pts',
  },
  {
    id: '2',
    img: require('../../assets/imgs/salon2.png'),
    title: 'Nails',
    price: '$ 25.00',
    total: '1',
    point: '2pts',
  },
  {
    id: '3',
    img: require('../../assets/imgs/salon3.png'),
    title: 'Haircut for men',
    price: '$ 22.00',
    total: '1',
    point: '2pts',
  },
  {
    id: '4',
    img: require('../../assets/imgs/salon2.png'),
    title: 'Haircut for kids',
    price: '$ 16.00',
    total: '1',
    point: '2pts',
  },
  {
    id: '5',
    img: require('../../assets/imgs/salon1.png'),
    title: 'Nails',
    price: '$ 25.00',
    total: '1',
    point: '2pts',
  },
  {
    id: '6',
    img: require('../../assets/imgs/salon2.png'),
    title: 'Haircut for men',
    price: '$ 22.00',
    total: '1',
    point: '2pts',
  },
];

const DetailBookingAndOrder = (props: any) => {
  const param = props.route.params;
  console.log('Name: ', param);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={20}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Order Detail</Text>
      </View>
      <ScrollView
        style={{marginBottom: '12%'}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.txtInfo}>Shop Information</Text>
        <View style={styles.bxInfo}>
          <Text
            style={{
              paddingLeft: '14.2%',
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Name: {' ' + ' ' + ' ' + ' ' + param.name}
          </Text>
          <Text
            style={{
              paddingLeft: '13.5%',
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingVertical: 10,
            }}>
            Phone: {' ' + ' ' + ' ' + ' ' + param.phone}
          </Text>
          <Text
            style={{
              paddingLeft: '10.2%',
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Address: {' ' + ' ' + ' '} Phnom Penh
          </Text>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: 'grey',
            marginTop: '5%',
            marginHorizontal: 15,
          }}></View>
        <Text style={styles.txtInfo}>Order Detail</Text>
        <View style={styles.bxInfo}>
          <Text
            style={{
              paddingLeft: '16.4%',
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 10,
            }}>
            Date: {' ' + ' ' + ' '} Friday, 27 October 2023
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <Text
              style={{
                paddingLeft: '13.4%',
                fontSize: FontSize.font15,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Status:{' '}
            </Text>
            <Text style={styles.request}>Requested</Text>
          </View>
        </View>
        <View
          style={{
            height: 0.5,
            backgroundColor: 'grey',
            marginTop: '5%',
            marginHorizontal: 15,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              paddingVertical: 20,
              fontSize: FontSize.font15,
              color: '#16247d',
              fontWeight: 'bold',
            }}>
            Select Services
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('Pressed');
              // navigation.push('TestScreen');
            }}>
            <View style={{paddingVertical: 20, flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: FontSize.font15,
                  color: '#16247d',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                Add Services
              </Text>
              <Ionicons name="add" size={20} color={blues}></Ionicons>
            </View>
          </TouchableOpacity>
        </View>
        {ServiceSelectionData.map((e, index) => {
          return (
            <View key={index} style={styles.ServiceSelectionCard}>
              <View style={styles.cardSelected}>
                <View style={styles.boxImg}>
                  <View style={{width: 40, height: 40}}>
                    <Image
                      style={{flex: 1, width: undefined, height: undefined}}
                      source={e.img}
                    />
                  </View>
                </View>
                <View style={{paddingLeft: 10}}>
                  <Text style={styles.txtSelectTitle}>{e.title}</Text>
                  <View style={{marginLeft: 10, marginTop: 5}}>
                    {/* <Text style={{color: 'grey'}}>Code:012</Text> */}
                    <Text style={{color: 'black'}}>Points: 2pts</Text>
                  </View>
                </View>
              </View>
              <View style={styles.circleOption}>
                <SimpleLineIcons
                  style={{
                    alignContent: 'center',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}
                  size={20}
                  color={'black'}
                  name="options-vertical"
                />
              </View>
              <Text style={styles.txtSelectService}>
                {e.price} ({e.total})
              </Text>
            </View>
          );
        })}
        <View
          style={{
            height: 0.5,
            backgroundColor: 'grey',
            marginTop: '2%',
            marginBottom: 15,
          }}></View>
        <Text style={styles.txtSummery}>Payment Summary</Text>
        <View
          style={{flexDirection: 'row', paddingLeft: '18%', marginTop: '0%'}}>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Total Amount:{' '}
          </Text>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            $ 20.50
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '25.5%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 14,
            }}>
            Discount:{' '}
          </Text>
          <Text
            style={{
              marginLeft: 1,
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 0,
            }}>
            $ 0.00
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '21.3%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Grand Total:{' '}
          </Text>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'red',
              paddingRight: 15,
            }}>
            $ 20.50
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '20.4%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Total Points:{' '}
          </Text>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            0 pts
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '21%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Spent Point:{' '}
          </Text>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: '#16247d',
              paddingRight: 15,
              textDecorationLine: 'underline',
            }}>
            0 pts
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '29.8%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Status:{' '}
          </Text>
          <Text
            style={{
              fontSize: FontSize.font15,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Unpaid
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: '15.8%', marginTop: '2%'}}>
          <Text
            style={{
              fontSize: FontSize.font16,
              fontWeight: 'bold',
              color: 'black',
              paddingRight: 15,
            }}>
            Payment Type:{' '}
          </Text>
          <Text
            style={{
              fontSize: FontSize.font16,
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
      <View style={styles.btnCancel}>
        <Text style={styles.txtOrder}>Cancel Order</Text>
      </View>
    </View>
  );
};

export default DetailBookingAndOrder;

const styles = StyleSheet.create({
  AppBar: {
    paddingHorizontal: 10,
    width: '100%',
    paddingBottom: 10,
    backgroundColor: '#16247d',
    paddingTop: '3%',
    flexDirection: 'row',
    verticalAlign: 'middle',
    justifyContent: 'center',
  },
  SubText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: '25%',
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: 10,
    marginLeft: 15,
  },
  btnCancel: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#f75300',
  },
  txtOrder: {
    fontSize: FontSize.font16,
    color: 'white',
    fontWeight: 'bold',
  },
  txtInfo: {
    marginTop: '5%',
    marginLeft: 15,
    fontSize: FontSize.font16,
    fontWeight: 'bold',
    color: blues,
    marginBottom: 15,
  },
  txtSummery: {
    marginTop: '1%',
    marginLeft: 15,
    fontSize: FontSize.font16,
    fontWeight: 'bold',
    color: blues,
    marginBottom: 15,
  },
  bxInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    //  paddingLeft: '13.7%',
    // backgroundColor: 'red',
  },
  request: {
    paddingHorizontal: 10,
    backgroundColor: '#7d7df7',
    borderRadius: 15,
    marginLeft: 15,
    color: 'white',
  },
  ServiceSelectionCard: {
    paddingVertical: 4,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardSelected: {
    flexDirection: 'row',
  },
  imgSelected: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: 'grey',
  },
  txtSelectTitle: {
    width: width * 0.35,
    paddingLeft: 10,
    fontSize: 15,
    color: blues,
    fontWeight: 'bold',
  },
  circleOption: {
    width: 35,
    height: 35,
    backgroundColor: '#eef1f6',
    borderRadius: 35 / 2,
    marginRight: 8,
  },
  txtSelectService: {
    position: 'absolute',
    bottom: 40,
    right: 0,
    marginRight: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  boxImg: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: '#dedede',
    marginLeft: 15,
    borderRadius: 8,
  },
});
