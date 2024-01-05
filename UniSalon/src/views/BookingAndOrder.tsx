import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {blues} from '../constant/color';
import {FontSize} from '../constant/FontSize';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: '007 haircut',
    phone: '012456210',
    date: 'Fri, 27 Oct 2023 16:20 PM',
    service: [
      {
        id: '1',
        sub_title: 'Haircut for men',
      },
      {
        id: '2',
        sub_title: 'Make-up for Wedding',
      },
      {
        id: '3',
        sub_title: 'Nails',
      },
      {
        id: '4',
        sub_title: 'Haircut for kids',
      },
    ],
    status: 'Order',
    price: '$70.00',
  },
  {
    id: '2',
    title: '007 haircut',
    phone: '012456210',
    date: 'Fri, 27 Oct 2023 16:20 PM',
    service: [
      {
        id: '1',
        sub_title: 'Haircut for kids',
      },
      {
        id: '2',
        sub_title: 'Nails',
      },
      {
        id: '3',
        sub_title: 'Haircut for Men',
      },
      {
        id: '4',
        sub_title: 'Make-up for Wedding',
      },
    ],
    status: 'Order',
    price: '$78.00',
  },
  {
    id: '3',
    title: '007 haircut',
    phone: '012456210',
    date: 'Fri, 27 Oct 2023 16:20 PM',
    service: [
      {
        id: '1',
        sub_title: 'Haircut for kids',
      },
      {
        id: '2',
        sub_title: 'Nails',
      },
      {
        id: '3',
        sub_title: 'Make-up for Wedding',
      },
      {
        id: '4',
        sub_title: 'Haircut for Men',
      },
    ],
    status: 'Order',
    price: '$70.00',
  },
  {
    id: '4',
    title: '007 haircut',
    phone: '012456210',
    date: 'Fri, 27 Oct 2023 16:20 PM',
    service: [
      {
        id: '1',
        sub_title: 'Haircolor',
      },
    ],
    status: 'Booking',
    price: '$2.00',
  },
  {
    id: '5',
    title: '007 haircut',
    phone: '012456210',
    date: 'Fri, 27 Oct 2023 16:20 PM',
    service: [
      {
        id: '1',
        sub_title: 'កាត់សក់កុមារ',
      },
      {
        id: '2',
        sub_title: 'ញុិចមុន',
      },
      {
        id: '3',
        sub_title: 'បិទម៉ាស់',
      },
      {
        id: '4',
        sub_title: 'Haircolor',
      },
      {
        id: '5',
        sub_title: 'លាបសក់',
      },
    ],
    status: 'Booking',
    price: '$49.00',
  },
];

export const noData = () => {
  return (
    <View
      style={{
        backgroundColor: '#f1f1f1',
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
      }}>
      <Feather name="folder" size={60} color={'grey'}></Feather>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'grey',
          paddingTop: '2%',
        }}>
        No Data
      </Text>
    </View>
  );
};

const BookingAndOrder = () => {
  const navigation: any = useNavigation();
  const [axisys, setAxisYs] = useState(0);
  var axisY = 300.19049072265625;
  return (
    <View style={styles.container}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={20}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Booking & Order</Text>
      </View>
      <FlatList
        style={{}}
        showsVerticalScrollIndicator={false}
        data={data}
        onScroll={event => {
          setAxisYs(event.nativeEvent.contentOffset.y);
          console.log('Event: ', event.nativeEvent.contentOffset.y);
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.push('DetailBookingAndOrder', {
                  name: item.title,
                  phone: item.phone,
                });
              }}
              key={index}
              style={[styles.cardData, {marginTop: index == 0 ? 12 : 0}]}>
              <View style={styles.firstRow}>
                <View style={styles.subFirstRow}>
                  <Image
                    source={require('../../assets/imgs/hairsalon.jpg')}
                    style={styles.img}
                  />
                  <View style={styles.columnTxtStyle}>
                    <Text style={styles.txtTitle}>{item.title}</Text>
                    <Text style={styles.txtPhone}>{item.phone}</Text>
                    <Text style={styles.txtDate}>{item.date}</Text>
                  </View>
                </View>
                <View style={styles.circle}>
                  <SimpleLineIcons
                    size={14}
                    color={'black'}
                    name="options-vertical"
                  />
                </View>
              </View>
              <View style={{marginTop: 15}} />
              <FlatList
                showsVerticalScrollIndicator={false}
                data={item.service}
                numColumns={3}
                renderItem={({item, index}) => {
                  return <Text style={styles.txtGrid}>{item.sub_title}</Text>;
                }}></FlatList>
              <View
                style={{
                  height: 0.5,
                  backgroundColor: 'black',
                  marginTop: 5,
                  marginBottom: 10,
                }}></View>
              <View style={styles.lastRow}>
                <View style={styles.subLastRowI}>
                  <Text style={styles.txtPrice}>{item.price}</Text>
                  <Text style={styles.txtUnpaid}>Unpaid</Text>
                </View>
                <View style={styles.subLastRowII}>
                  <View style={[styles.circle, {backgroundColor: blues}]}>
                    <Ionicons size={15} color={'white'} name="person-sharp" />
                  </View>
                  <View
                    style={[styles.circleSocial, {backgroundColor: '#7d7df7'}]}>
                    <Ionicons size={15} color={'white'} name="mail" />
                  </View>
                  <View style={[styles.circle, {backgroundColor: '#ffa042'}]}>
                    <Ionicons size={15} color={'white'} name="call" />
                  </View>
                </View>
              </View>
              <Text
                style={[
                  styles.txtStatus,
                  {
                    backgroundColor:
                      item.status == 'Booking' ? '#6eaec7' : '#6c6910',
                  },
                ]}>
                {item.status}
              </Text>
            </TouchableOpacity>
          );
        }}></FlatList>
    </View>
  );
};

export default BookingAndOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  cardData: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    marginBottom: 12,
    marginHorizontal: 12,
    borderRadius: 8,
  },
  firstRow: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 65,
    height: 65,
  },
  columnTxtStyle: {
    flexDirection: 'column',
    marginLeft: 13,
  },
  txtTitle: {
    color: blues,
    fontWeight: 'bold',
    fontSize: FontSize.font15,
  },
  txtPhone: {
    marginTop: 8,
    fontSize: FontSize.font14,
    fontWeight: 'bold',
    color: '#bebfc4',
  },
  subFirstRow: {
    flexDirection: 'row',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSocial: {
    marginHorizontal: 8,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDate: {
    marginTop: 8,
    color: 'red',
    fontWeight: 'bold',
    fontSize: FontSize.font14,
  },
  txtGrid: {
    paddingHorizontal: width * 0.018,
    paddingVertical: 8,
    backgroundColor: '#f2f2f2',
    marginRight: 5,
    marginBottom: 8,
    borderRadius: 15,
    color: blues,
    fontSize: height * 0.015
  },
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subLastRowI: {
    flexDirection: 'row',
  },
  txtPrice: {
    color: 'red',
    fontSize: FontSize.font16,
  },
  txtUnpaid: {
    height: 21,
    paddingHorizontal: 8,
    // paddingVertical: 1,
    backgroundColor: '#e50000',
    marginLeft: 8,
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 1,
  },
  subLastRowII: {
    flexDirection: 'row',
  },
  txtStatus: {
    position: 'absolute',
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: 'green',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 15,
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
});
