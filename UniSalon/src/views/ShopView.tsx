import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {FontSize} from '../constant/FontSize';

const RecommendList = [
  {
    id: 1,
    title: 'មែន​ស្តាយ',
    rate: 3,
    customer: '27 Customers',
  },
  {
    id: 2,
    title: 'Model Singapore',
    rate: 0,
    customer: null,
  },
  {
    id: 3,
    title: 'មែន​ស្តាយ',
    rate: 3,
    customer: null,
  },
  {
    id: 4,
    title: 'Model Singapore',
    rate: 0,
    customer: null,
  },
  {
    id: 5,
    title: 'មែន​ស្តាយ',
    rate: 3,
    customer: null,
  },
  {
    id: 6,
    title: 'Model Singapore',
    rate: 0,
    customer: null,
  },
  {
    id: 7,
    title: 'មែន​ស្តាយ',
    rate: 3,
    customer: '3 Customers',
  },
];

const MoreSaloneData = [
  {
    id: 1,
    title: 'ប៉ែន ស្តាយ',
    subtitle: 'បម្រើសេវាកម្មជូនអស់លោកលោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព',
  },
  {
    id: 2,
    title: 'ABC007',
    subtitle: 'យើងផ្ដោតលើគុណភាពជាចម្បង',
  },
  {
    id: 3,
    title: 'ប៉ែន ស្តាយ',
    subtitle: 'បម្រើសេវាកម្មជូនអស់លោកលោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព',
  },
  {
    id: 4,
    title: 'ABC007',
    subtitle: 'យើងផ្ដោតលើគុណភាពជាចម្បង',
  },
  {
    id: 5,
    title: 'ABC007',
    subtitle: 'យើងផ្ដោតលើគុណភាពជាចម្បង',
  },
];

const {width, height} = Dimensions.get('window');
export const  ShopView = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.Appbar}>
        <Feather
          onPress={() => {
            navigation.openDrawer();
          }}
          name="menu"
          size={24}
          style={{
            color: 'white',
            position: 'absolute',
            left: 15,
          }}
        />
        <Text style={styles.TitleAppbar}>Shops</Text>
      </View>
      <View style={styles.SearchBar}>
        <EvilIcons name="search" size={20} color="grey" />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.push('SearchBarView');
          }}>
          <TextInput
            editable={false}
            placeholder="Search Salons..."
            placeholderTextColor={'grey'}
            style={{
              fontSize: FontSize.font14,
              marginLeft: 10,
              margin: 0,
              padding: 0,
            }}></TextInput>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 'auto',
          height: 0.5,
          backgroundColor: 'grey',
          marginHorizontal: 15,
          marginVertical: 0,
        }}></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: height * 0.25}}>
        <Text
          style={{
            fontSize: FontSize.font15,
            color: '#16247d',
            paddingVertical: 10,
            marginHorizontal: 15,
            fontWeight: 'bold',
          }}>
          Recommend Salons
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 5}}>
          {RecommendList.map((e, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={1}
                onPress={() => {
                  console.log('Push new screen');
                  navigation.push('ShopDetailView');
                }}>
                <View
                  style={[{
                    width: width * 0.45,
                    marginLeft: 10,
                    backgroundColor: 'white',
                    paddingBottom: 8,
                    // borderWidth: 0.3,
                    marginBottom: 3,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }, styles.elevation]}>
                  <View
                    style={{
                      width: 'auto',
                      height: 80,
                      backgroundColor: 'grey',
                      marginBottom: 4,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}>
                    <Image
                      style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                      source={require('../../assets/imgs/img1.jpg')}></Image>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', marginHorizontal: 5}}>
                      <FontAwesome6
                        name="location-dot"
                        style={{paddingRight: 5, marginTop: 0}}
                        color={'#16247d'}
                        size={12}></FontAwesome6>
                      <Text
                        style={{
                          color: '#16247d',
                          fontWeight: 'bold',
                          fontSize: 10,
                        }}>
                        None
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: 'grey',
                        marginHorizontal: 5,
                        marginTop: 0,
                        fontSize: FontSize.font12,
                        fontWeight: 'bold',
                        paddingRight: 4,
                      }}>
                      {e.customer}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      marginHorizontal: 5,
                      marginTop: 3,
                      fontSize: FontSize.font12,
                      fontWeight: 'bold',
                    }}>
                    មែនស្តាយ
                  </Text>
                  <Text
                    style={{
                      color: 'grey',
                      marginHorizontal: 4,
                      marginBottom: 3,
                      fontSize: FontSize.font10,
                    }}>
                    ⭐⭐⭐⭐⭐ (3)
                  </Text>
                  {/* <View
                    style={{
                      width: 150,
                      marginTop: 10,
                      height: 40,
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#16247d',
                      alignContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text style={{color: 'grey'}}>Booking Now</Text>
                  </View> */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      console.log('Start');
                      navigation.push('FlowBookingView');
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        borderWidth: 0.8,
                        borderColor: '#16247d',
                        borderRadius: 3,
                        marginHorizontal: 5,
                        marginTop: 5,
                        fontSize: FontSize.font12,
                        fontWeight: 'bold',
                        color: '#16247d',
                      }}>
                      Booking Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Text
          style={{
            paddingLeft: 15,
            paddingTop: 15,
            fontSize: FontSize.font15,
            color: '#16247d',
            fontWeight: 'bold',
          }}>
          More Salons
        </Text>
        {MoreSaloneData.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              onPress={() => {
                console.log('Click ប៉ែន');
                navigation.push('ShopDetailView');
              }}>
              <View
                style={[{
                  paddingTop: 10,
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  backgroundColor: 'white',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingHorizontal: 15,
                  borderRadius: 8,
                  // borderWidth: 0.3,
                  paddingBottom: 10
                }, styles.elevation]}>
                <View
                  style={{
                    width: width * 0.3,
                    height: height * 0.13,
                    backgroundColor: '#ebebec',
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                      borderRadius: 10,
                    }}
                    source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingLeft: 15,
                    }}>
                    <View>
                      <Text style={{fontSize: FontSize.font14, color: 'black'}}>
                        {e.title}
                      </Text>
                      <Text style={{color: 'grey', fontSize: FontSize.font12}}>
                        ⭐⭐⭐⭐⭐ (3)
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingLeft: 17,
                      paddingRight: 5,
                      paddingTop: 10,
                      flexDirection: 'column',
                      // justifyContent: 'flex-start',
                    }}>
                    <View
                      style={{
                        width: width * 0.5,
                        paddingVertical: 1,
                        backgroundColor: 'white',
                        marginRight: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: FontSize.font12,
                          color: 'grey',
                          fontWeight: 'bold',
                        }}>
                        {e.subtitle}
                      </Text>
                    </View>
                    {/* បម្រើសេវាកម្មជូនអស់លោក */}
                    {/* <Text style={{fontSize: 14.5, color: 'grey', fontWeight: "bold"}}>
                      លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព
                    </Text> */}
                    <View style={{flexDirection: 'row',  paddingTop: 15}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingRight: 20,
                        }}>
                        <FontAwesome6
                          size={11}
                          name="location-dot"
                          style={{paddingRight: 5, paddingTop: 2.5}}
                          color={'#16247d'}></FontAwesome6>
                        <Text
                          style={{
                            color: '#16247d',
                            fontWeight: 'bold',
                            fontSize: 12.3,
                          }}>
                          None
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row',}}>
                        <FontAwesome6
                          size={12}
                          name="clock"
                          style={{paddingRight: 5, marginTop: 2.5}}
                          color={'#16247d'}></FontAwesome6>
                        <Text
                          style={{
                            color: '#16247d',
                            fontWeight: 'bold',
                            fontSize: FontSize.font12,
                          }}>
                          Opening
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.push('FlowBookingView');
                  }}>
                  <View
                    style={{
                      // width: 70,
                      // height: 30,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      borderColor: '#16247d',
                      position: 'absolute',
                      right: 25,
                      top: 0,
                      marginTop: 0,
                      // marginRight: 17,
                    }}>
                    <Text
                      style={{
                        color: '#16247d',
                        fontWeight: 'bold',
                        fontSize: FontSize.font10,
                      }}>
                      Booking
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

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
    fontWeight: 'bold'
  },
  SearchBar: {
    width: 'auto',
    margin: 15,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  elevation: {
    elevation: 2.4,
    shadowColor: '#52006A',
  },
});
