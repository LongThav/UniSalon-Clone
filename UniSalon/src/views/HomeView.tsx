import React, {useCallback, useMemo, useRef} from 'react';
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
  FlatList,
  Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import BottomSheet from '@gorhom/bottom-sheet';
import {FontSize} from '../constant/FontSize';
import Explore from '../component/Explore';
import {fonts} from '@rneui/base';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {width, height} = Dimensions.get('window');

const PopularSalonsData = [
  {
    id: '1',
    title: 'មែន ស្តាយ',
    numCustomer: '27',
    des: 'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲកាន់តែមានប្រសិទ្ធភា...',
    img: require('../../assets/imgs/cover.jpg'),
  },
  {
    id: '2',
    title: '007 haircut',
    numCustomer: '1',
    des: '',
    img: require('../../assets/imgs/cover.jpg'),
  },
  {
    id: '3',
    title: 'មែន ស្តាយ',
    numCustomer: '27',
    des: 'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲកាន់តែមានប្រសិទ្ធភា...',
    img: require('../../assets/imgs/cover.jpg'),
  },
  {
    id: '4',
    title: 'មែន ស្តាយ',
    numCustomer: '27',
    des: 'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲកាន់តែមានប្រសិទ្ធភា...',
    img: require('../../assets/imgs/cover.jpg'),
  },
];

const ScamData = [
  {
    id: '1',
    item: '',
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
  const navigation: any = useNavigation();
  const snapPoint = useMemo(() => ['25%', '50%', '70%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['90%', '12%', '30%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
      {/* <View style={{
                backgroundColor: 'red',
                width: 200,
                height: 200,
                position: 'absolute'
            }}>

            </View> */}
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Entypo name="menu" size={30} color={'grey'}></Entypo>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          {/* <Text style={{ fontSize: 20, marginLeft: 15 }}>Search Salons...</Text> */}
          <View
            style={{
              width: width * 0.58,
            }}>
            <TextInput
              placeholder="Search Salons..."
              placeholderTextColor={'grey'}
              style={{
                fontSize: FontSize.font13,
                marginLeft: 0,
                margin: 0,
                padding: 0,
              }}></TextInput>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <AntDesign
            color={'black'}
            name="search1"
            size={FontSize.font15}
            style={{marginTop: 3}}></AntDesign>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 20 / 2,
              backgroundColor: 'grey',
              marginHorizontal: 15,
            }}>
            <Image
              style={{flex: 1, width: 20, height: 20, borderRadius: 20 / 2}}
              source={require('../../assets/imgs/cam_flag.png')}></Image>
          </View>
          <MaterialIcons
            name="notifications-none"
            size={15}
            color={'black'}
            style={{marginTop: 2}}></MaterialIcons>
        </View>
      </View>
      <ScrollView
        style={{position: 'absolute', marginTop: height * 0.09}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <TouchableOpacity activeOpacity={1}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'grey',
              fontSize: FontSize.font11,
              paddingVertical: 5,
              paddingHorizontal: 18,
              backgroundColor: 'white',
              marginLeft: 15,
              borderRadius: 20,
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('MobileServiceView');
          }}
          activeOpacity={1}>
          {/* <Text style={{fontWeight: 'bold', color: 'grey'}}>
            Mobile Services
          </Text> */}
          <Text
            style={{
              fontWeight: 'bold',
              color: 'grey',
              fontSize: FontSize.font11,
              paddingVertical: 5,
              paddingHorizontal: 18,
              backgroundColor: 'white',
              marginLeft: 15,
              borderRadius: 20,
            }}>
            Mobile Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 18,
              paddingVertical: 5,
              backgroundColor: 'white',
              marginLeft: 15,
              borderRadius: 20,
            }}>
            <Entypo name="shop" size={15} color={'grey'}></Entypo>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'grey',
                marginLeft: 15,
                fontSize: FontSize.font11,
              }}>
              Mobile Services
            </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity activeOpacity={1} style={styles.FilterII}>
          <Fontisto name="scissors" size={20} color={'grey'}></Fontisto>
          <Text style={{fontWeight: 'bold', color: 'grey', marginLeft: 15}}>
            Professor
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity activeOpacity={1}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 18,
              paddingVertical: 5,
              backgroundColor: 'white',
              marginLeft: 15,
              borderRadius: 20,
            }}>
            <Fontisto name="scissors" size={15} color={'grey'}></Fontisto>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'grey',
                marginLeft: 15,
                fontSize: FontSize.font11,
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
        onChange={handleSheetChanges}>
        {/* <View style={{flex: 1, backgroundColor: 'red', }}> */}
        {/* <FlatList
            showsVerticalScrollIndicator = {false}
            data={ScamData}
            style={{
              // height: 100
            }}
            renderItem={({item, index}) => {
              return (
                // <></>
               
              );
            }}
          /> */}
        {/* <FlatList
          data={[1,]}
          renderItem={() => (
           
          )}
          /> */}
        <View style={[styles.contentContainer, {backgroundColor: 'white'}]}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
              textAlign: 'center',
            }}>
            Explore
          </Text>
          <Explore />
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
              textAlign: 'left',
              paddingLeft: 15,
              paddingTop: 10,
            }}>
            Popular Salons
          </Text>
          <FlatList
            style={{height: height * 0.5}}
            data={PopularSalonsData}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <View style={styles.PopularCard}>
                  <View
                    style={{
                      height: '38%',
                      backgroundColor: 'red',
                      borderTopLeftRadius: 7,
                      borderTopRightRadius: 7,
                    }}>
                    <Image
                      style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
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
                  <Text style={styles.Booking}>Booking Now</Text>
                </View>
              );
            }}
          />
        </View>
        {/* </View> */}
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
    // ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
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
    // backgroundColor: 'red'
  },
  contentContainer: {
    // flex: 1,
    // alignItems: 'center',
  },
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
    // padding: 10,
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
  Booking: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#16247d',
    textAlign: 'center',
    borderWidth: 0.8,
    // marginTop: 7,
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
    height: height * 0.285,
    backgroundColor: 'white',
    marginLeft: 15,
    marginTop: 15,
    borderRadius: 8,
    borderBottomWidth: 0.3,
    borderRightWidth: 0.1,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
