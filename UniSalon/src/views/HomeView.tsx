import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {FontSize} from '../constant/FontSize';
import Explore from '../component/Explore';
import {fonts} from '@rneui/base';
import {FlatList} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const PopularSalonsData = [
  {
    id: '1',
    title: 'មែន ស្តាយ',
    numCustomer: '27',
    des: 'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲកាន់តែមានប្រសិទ្ធភា...',
    img: require('../../assets/imgs/max.jpg'),
  },
  {
    id: '2',
    title: '007 haircut',
    numCustomer: '1',
    des: '',
    img: require('../../assets/imgs/max.jpg'),
  },
  {
    id: '3',
    title: 'មែន ស្តាយ',
    numCustomer: '27',
    des: 'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲកាន់តែមានប្រសិទ្ធភា...',
    img: require('../../assets/imgs/max.jpg'),
  },
  {
    id: '4',
    title: 'មែន ស្តាយ',
    numCustomer: '27',
    des: 'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲកាន់តែមានប្រសិទ្ធភា...',
    img: require('../../assets/imgs/max.jpg'),
  },
];

const ScamData = [
  {
    id: '1',
    item: '',
  },
];

const TopRatingProfessorData = [
  {
    id: '1',
    name: 'Prash Fukumotoman',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: '2',
    name: '',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: '3',
    name: '',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: '4',
    name: 'PHAN SAMPHORS',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: '5',
    name: 'Kop',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: '6',
    name: '',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: '7',
    name: 'Kop',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: '8',
    name: '',
    img: require('../../assets/imgs/img1.jpg'),
  },
];

const NewSalonData = [
  {
    id: '1',
    title: 'Teng Barer',
    numCustomer: '0',
    img: require('../../assets/imgs/max.jpg'),
  },
  {
    id: '2',
    title: 'Vicci Beauty Bar',
    numCustomer: '0',
    des: '',
    img: require('../../assets/imgs/max.jpg'),
  },
  {
    id: '3',
    title: 'មែន ស្តាយ',
    numCustomer: '27',
    img: require('../../assets/imgs/max.jpg'),
  },
  {
    id: '4',
    title: 'មែន ស្តាយ',
    numCustomer: '27',
    img: require('../../assets/imgs/max.jpg'),
  },
];

const PopularSalon = () => {
  return (
    <ScrollView horizontal={true}>
      {PopularSalonsData.map((e, index) => {
        return (
          <View key={index}>
            <Text style={{color: 'red'}}>Hi</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export const HomeView = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  console.log('Check: ', isEnabled);
  const navigation: any = useNavigation();
  const snapPoint = useMemo(() => ['25%', '50%', '70%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['12%', '12%', '30%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderInner = () => {
    return (
      <View>
        <View style={{padding: 15, marginBottom: height * 0.1}}>
          <Text style={styles.txtExplore}>Explore</Text>
          <Explore />
          <Text style={styles.txtPopular}>Popular Salons</Text>
          <FlatList
            scrollEnabled={true}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={PopularSalonsData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    console.log('Press');
                    navigation.push('ShopDetailView');
                  }}>
                  <View style={styles.PopularCard}>
                    <View
                      style={{
                        height: 80,
                        borderTopLeftRadius: 7,
                        borderTopRightRadius: 7,
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderTopLeftRadius: 7,
                          borderTopRightRadius: 7,
                          borderWidth: 0.3,
                        }}
                        source={item.img}></Image>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginRight: 10,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 5,
                          marginTop: 10,
                        }}>
                        <Entypo
                          style={{}}
                          name="location-pin"
                          size={FontSize.font14}
                          color={'#16247d'}
                        />
                        <Text
                          style={{
                            fontSize: FontSize.font11,
                            fontWeight: 'bold',
                            color: '#16247d',
                          }}>
                          None
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 10,
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: FontSize.font11,
                            fontWeight: 'bold',
                            color: 'grey',
                          }}>
                          {item.numCustomer}
                        </Text>
                        <Text
                          style={{
                            fontSize: FontSize.font11,
                            fontWeight: 'bold',
                            color: 'grey',
                            paddingLeft: 5,
                          }}>
                          Customers
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        marginLeft: 10,
                        marginTop: 5,
                        fontSize: FontSize.font12,
                        color: 'grey',
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: FontSize.font10,
                        marginLeft: 10,
                        color: 'grey',
                      }}>
                      ⭐⭐⭐⭐⭐ (4)
                    </Text>
                    <Text
                      style={{
                        marginHorizontal: 10,
                        fontSize: FontSize.font11,
                        color: 'grey',
                        fontWeight: 'bold',
                      }}>
                      {item.des}
                    </Text>
                    <TouchableOpacity
                      style={styles.Booking}
                      onPress={() => {
                        console.log('on pressed');
                        navigation.push('FlowBookingView');
                      }}>
                      <Text style={styles.txtBooking}>Booking Now</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={styles.txtSpecial}>Special Promotions</Text>
          <View style={styles.SpecialBox}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('DetailPromotion');
              }}>
              <Image
                style={styles.boxImg}
                source={require('../../assets/imgs/img1.jpg')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.txtTopRatingSalon}>Top Rating Salons</Text>
          <FlatList
            data={PopularSalonsData}
            style={{width: width}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('ShopDetailView');
                  }}>
                  <View style={styles.PopularCard}>
                    <View
                      style={{
                        height: 80,
                        borderTopLeftRadius: 7,
                        borderTopRightRadius: 7,
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderTopLeftRadius: 7,
                          borderTopRightRadius: 7,
                        }}
                        source={require('../../assets/imgs/cover2.jpg')}></Image>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginRight: 10,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 5,
                          marginTop: 10,
                        }}>
                        <Entypo
                          style={{}}
                          name="location-pin"
                          size={FontSize.font14}
                          color={'#16247d'}
                        />
                        <Text
                          style={{
                            fontSize: FontSize.font11,
                            fontWeight: 'bold',
                            color: '#16247d',
                          }}>
                          None
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 10,
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: FontSize.font11,
                            fontWeight: 'bold',
                            color: 'grey',
                          }}>
                          {item.numCustomer}
                        </Text>
                        <Text
                          style={{
                            fontSize: FontSize.font11,
                            fontWeight: 'bold',
                            color: 'grey',
                            paddingLeft: 5,
                          }}>
                          Customers
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        marginLeft: 10,
                        marginTop: 5,
                        fontSize: FontSize.font12,
                        color: 'grey',
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: FontSize.font10,
                        marginLeft: 10,
                        color: 'grey',
                      }}>
                      ⭐⭐⭐⭐⭐ (4)
                    </Text>
                    <Text
                      style={{
                        marginHorizontal: 10,
                        fontSize: FontSize.font11,
                        color: 'grey',
                        fontWeight: 'bold',
                      }}>
                      {item.des}
                    </Text>
                    {/* <Text style={styles.Booking}>Booking Now</Text> */}
                    <TouchableOpacity
                      style={styles.Booking}
                      onPress={() => {
                        console.log('on pressed');
                        navigation.push('FlowBookingView');
                      }}>
                      <Text style={styles.txtBooking}>Booking Now</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={styles.txtSpecial}>Top Rating Professor</Text>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={TopRatingProfessorData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.push('ProfessorDetailView', {
                      name: item.name,
                      img: item.img,
                    });
                  }}>
                  <View style={styles.CardTopRating}>
                    <View style={styles.imgCircleTopRating}>
                      <Image
                        style={{
                          flex: 1,
                          height: 60,
                          width: 60,
                          borderRadius: 60 / 2,
                        }}
                        source={item.img}
                      />
                    </View>
                    <Text style={styles.txtNameTopRating}>{item.name}</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <AntDesign size={18} color={'#f5bf0c'} name="staro" />
                      <AntDesign size={18} color={'#f5bf0c'} name="staro" />
                      <AntDesign size={18} color={'#f5bf0c'} name="staro" />
                      <AntDesign size={18} color={'#f5bf0c'} name="staro" />
                      <AntDesign size={18} color={'#f5bf0c'} name="staro" />
                    </View>
                    <Text style={{paddingTop: 5, color: 'grey'}}>
                      0 Credit / 0 Review
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Entypo
                        size={12}
                        color={'blue'}
                        name="location-pin"
                        style={{marginTop: 2}}
                      />
                      <Text
                        style={{
                          fontSize: 12.1,
                          color: 'blue',
                          fontWeight: 'bold',
                        }}>
                        None
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={e => e.id}
          />
          <View style={{marginTop: 10}}></View>
          <Text style={styles.txtNameTopRating}>New Salons</Text>
          <FlatList
            data={NewSalonData}
            style={{width: width}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.push('ShopDetailView');
                  }}>
                  <View style={styles.PopularCard}>
                    <View
                      style={{
                        height: 80,
                        borderTopLeftRadius: 7,
                        borderTopRightRadius: 7,
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderTopLeftRadius: 7,
                          borderTopRightRadius: 7,
                        }}
                        source={item.img}></Image>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginRight: 10,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 5,
                          marginTop: 10,
                        }}>
                        <Entypo
                          style={{}}
                          name="location-pin"
                          size={FontSize.font14}
                          color={'#16247d'}
                        />
                        <Text
                          style={{
                            fontSize: FontSize.font11,
                            fontWeight: 'bold',
                            color: '#16247d',
                          }}>
                          None
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        marginLeft: 10,
                        marginTop: 5,
                        fontSize: FontSize.font12,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: FontSize.font10,
                        marginLeft: 10,
                        color: 'grey',
                      }}>
                      ⭐⭐⭐⭐⭐ ({item.numCustomer})
                    </Text>
                    <TouchableOpacity
                      style={styles.Booking}
                      onPress={() => {
                        console.log('on pressed');
                        navigation.push('FlowBookingView');
                      }}>
                      <Text style={styles.txtBooking}>Booking Now</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        style={styles.map}
        region={{
          latitude: 11.5796,
          longitude: 104.925,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
      <View style={[styles.AppBar, styles.elevation]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Entypo
            name="menu"
            size={30}
            color={'grey'}
            style={{marginLeft: 8}}></Entypo>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: width * 0.52,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.push('SearchBarView');
                console.log('Presh');
              }}>
              <TextInput
                editable={false}
                placeholder="Search Salons..."
                placeholderTextColor={'#aab8b6'}
                style={{
                  fontSize: FontSize.font13,
                  marginLeft: 8,
                  margin: 0,
                  padding: 0,
                }}></TextInput>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            width: '30%',
          }}>
          <AntDesign
            color={'black'}
            name="search1"
            size={20}
            style={{marginTop: 3}}></AntDesign>
          <TouchableOpacity activeOpacity={0.8} onPress={toggleSwitch}>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 25 / 2,
                backgroundColor: 'grey',
                // marginHorizontal: 22,
                marginTop: 2,
              }}>
              {/* {isEnabled ? (
                <Image
                  style={{flex: 1, width: 25, height: 25, borderRadius: 25 / 2}}
                  source={require('../../assets/imgs/cam_flag.png')}
                />
              ) : (
                <Image
                  style={{flex: 1, width: 25, height: 25, borderRadius: 25 / 2}}
                  source={require('../../assets/imgs/flag_english.jpg')}
                />
              )} */}
              <Image
                style={{flex: 1, width: 25, height: 25, borderRadius: 25 / 2}}
                source={
                  isEnabled
                    ? require('../../assets/imgs/cam_flag.png')
                    : require('../../assets/imgs/logo_english.png')
                }
              />
            </View>
          </TouchableOpacity>
          <MaterialIcons
            onPress={() => {
              navigation.push('NotificationView');
            }}
            name="notifications-none"
            size={25}
            color={'black'}
            style={{marginTop: 2, marginRight: 0}}></MaterialIcons>
        </View>
      </View>
      <ScrollView
        style={{position: 'absolute', marginTop: height * 0.09}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <TouchableOpacity activeOpacity={1}>
          <Text
            style={[
              {
                color: 'grey',
                fontSize: FontSize.font13,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: '#eef1f6',
                marginLeft: 15,
                borderRadius: 20,
              },
              styles.elevation,
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('MobileServiceView');
          }}
          activeOpacity={1}>
          <Text
            style={[
              {
                color: '#152259',
                fontSize: FontSize.font13,
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                marginLeft: 15,
                borderRadius: 20,
              },
              styles.elevation,
            ]}>
            Mobile Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View
            style={[
              {
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 8,
                backgroundColor: 'white',
                marginLeft: 15,
                borderRadius: 20,
              },
              styles.elevation,
            ]}>
            <Entypo name="shop" size={18} color={'#a02929'}></Entypo>
            <Text
              style={{
                color: '#a02929',
                marginLeft: 7,
                fontSize: FontSize.font13,
              }}>
              Shops
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View
            style={[
              {
                flexDirection: 'row',
                paddingHorizontal: 20,
                paddingVertical: 8,
                backgroundColor: 'white',
                marginLeft: 15,
                borderRadius: 20,
              },
              styles.elevation,
            ]}>
            <Fontisto name="scissors" size={18} color={'#152259'}></Fontisto>
            <Text
              style={{
                color: '#152259',
                marginLeft: 8,
                fontSize: FontSize.font13,
              }}>
              Professor
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <MaterialCommunityIcons
        size={12}
        color={'blue'}
        style={styles.IconStyle}
        name="refresh"></MaterialCommunityIcons>
      <FontAwesome6
        size={12}
        color={'black'}
        style={styles.IconStyleII}
        name="location-crosshairs"></FontAwesome6>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.inditorBottomSheet}
        onChange={handleSheetChanges}>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          children={renderInner()}
          contentContainerStyle={{}}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    width: '95%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    position: 'absolute',
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
  },
  FilterAll: {
    width: 60,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 13,
  },
  FilterII: {
    width: 'auto',
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 13,
    flexDirection: 'row',
  },
  IconStyle: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    bottom: height * 0.5,
    right: 0,
    marginRight: 15,
  },
  IconStyleII: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    bottom: height * 0.44,
    right: 0,
    marginRight: 15,
  },
  BottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: 100,
    height: 100,
  },
  contentContainer: {},
  PopularSalonCard: {
    flex: 1,
    marginTop: 15,
    height: height * 0.2,
    marginLeft: 15,
    width: width * 0.52,
    backgroundColor: 'white',
    borderRadius: 7,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  ScrollPopularSalon: {
    marginTop: 10,
    height: height * 0.36,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  txtBooking: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#16247d',
    textAlign: 'center',
  },
  Booking: {
    borderWidth: 0.8,
    marginHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    width: '90%',
    bottom: 0,
    marginBottom: 5,
    borderColor: '#16247d',
    borderRadius: 4,
  },
  PopularCard: {
    width: width * 0.5,
    height: height * 0.276,
    marginRight: 10,
    backgroundColor: 'white',
    marginTop: 15,
    borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
    borderWidth: 0.3,
  },
  txtExplore: {
    color: '#16247d',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
  txtSpecial: {
    paddingTop: 17,
    paddingLeft: 1,
    fontWeight: 'bold',
    color: '#16247d',
    fontSize: 16,
  },
  txtPopular: {
    color: '#16247d',
    fontSize: FontSize.font14,
    fontWeight: 'bold',
  },
  SpecialBox: {
    height: width * 0.37,
    width: width * 0.4,
    backgroundColor: '#eef1f6',
    marginVertical: 15,
    borderRadius: 8,
  },
  boxImg: {
    height: width * 0.37,
    width: width * 0.4,
    borderRadius: 8,
  },
  txtTopRatingSalon: {
    color: '#16247d',
    fontSize: FontSize.font14,
    fontWeight: 'bold',
  },
  CardTopRating: {
    width: width * 0.455,
    height: height * 0.24,
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 8,
    borderColor: '#f2f2f2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCircleTopRating: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#f2f2f2',
  },
  txtNameTopRating: {
    color: '#16247d',
    fontSize: FontSize.font14,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  inditorBottomSheet: {
    width: width * 0.1,
    height: 8,
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 8,
  },
  elevation: {
    elevation: 5,
    shadowColor: '#52006A',
  },
  shadow: {
    elevation: 5,
    shadowColor: '#52006A',
  },
});
