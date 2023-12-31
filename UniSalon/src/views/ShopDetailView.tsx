import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {FontSize} from '../constant/FontSize';
const {width, height} = Dimensions.get('window');

const ListProfessor = [
  {
    id: '1',
    name: 'Sythan',
    role: 'Professor',
    rate: '5',
    other: 'Professor of ...',
    phone: '0889246027',
    mail: 'systhan@gmail.com',
    professional: 'Professor of Men Style',
    location: '#42,Street 454, Toul Tumpong I, Phnom Penh, Cambodia',
  },
  {
    id: '2',
    name: 'គង់{070933033}',
    role: 'ជាង',
    rate: '5',
    other: 'Professor of ...',
    phone: '0889246027',
    mail: 'kong49@gmail.com',
    professional: 'Professor of Men Style',
    location: '#42,Street 454, Toul Tumpong I, Phnom Penh, Cambodia',
  },
  {
    id: '3',
    name: 'ជាង សុធា',
    role: 'Professor',
    rate: '5',
    other: 'Professor of ...',
    phone: '0889246027',
    mail: 'chheangthea@gmail.com',
    professional: 'Professor of Men Style',
    location: '#42,Street 454, Toul Tumpong I, Phnom Penh, Cambodia',
  },
  {
    id: '4',
    name: 'Sythan',
    role: 'Professor',
    rate: '5',
    other: 'Professor of ...',
    phone: '0889246027',
    mail: 'systhan@gmail.com',
    professional: 'Professor of Men Style',
    location: '#42,Street 454, Toul Tumpong I, Phnom Penh, Cambodia',
  },
  {
    id: '5',
    name: 'គង់{070933033}',
    role: 'ជាង',
    rate: '5',
    other: 'Professor of ...',
    phone: '0889246027',
    mail: 'kong49@gmail.com',
    professional: 'Professor of Men Style',
    location: '#42,Street 454, Toul Tumpong I, Phnom Penh, Cambodia',
  },
  {
    id: '6',
    name: 'ជាង សុធា',
    role: 'Professor',
    rate: '5',
    other: 'Professor of ...',
    phone: '0889246027',
    mail: 'chheangthea@gmail.com',
    professional: 'Professor of Men Style',
    location: '#42,Street 454, Toul Tumpong I, Phnom Penh, Cambodia',
  },
];

const MobileServieData = [
  {
    id: '1',
    name: 'Nails',
    price: '$ 10.00 Up',
    order: 'Order Now',
    point: '1',
  },
  {
    id: '2',
    name: 'Make-up for Wedding',
    price: '$ 15.00 Up',
    order: 'Order Now',
    point: '3',
  },
  {
    id: '3',
    name: 'Haircut for me',
    price: '$ 10.00 Up',
    order: 'Order Now',
    point: '5',
  },
  {
    id: '4',
    name: 'Nails',
    price: '$ 10.00 Up',
    order: 'Order Now',
    point: '1',
  },
  {
    id: '5',
    name: 'Make-up for Wedding',
    price: '$ 15.00 Up',
    order: 'Order Now',
    point: '3',
  },
  {
    id: '6',
    name: 'Haircut for me',
    price: '$ 10.00 Up',
    order: 'Order Now',
    point: '5',
  },
];

const MemeberShipData = [
  {
    type: 'Silver',
    score: '200 pts(Dis. 10%)',
  },
  {
    type: 'Gold',
    score: '400 pts(Dis. 15%)',
  },
  {
    type: 'Platinum',
    score: '600 pts(Dis. 20%)',
  },
];

const index: number = 0;

const MemberTypeData = [];

const ShopDetailView = () => {
  const navigation: any = useNavigation();
  const [isSelect, setSelect] = useState(false);
  const [marginIndex, setMarginIndex] = useState<any>(null);
  var indexs = 0;
  var indexMobileService = 0;
  const checkSelected = () => {
    setSelect(check => !check);
  };
  console.log(isSelect);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.AppBar}>
        <AntDesign
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}
          name="arrowleft"
          color={'white'}
          size={20}></AntDesign>
        <Text style={styles.TxtTitleAppBar}>Shop Information</Text>
        <AntDesign
          onPress={checkSelected}
          name={isSelect ? 'heart' : 'hearto'}
          color={'white'}
          size={18}></AntDesign>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: '2%'}}>
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
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          មែន​ ស្តាយ
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 7,
            fontSize: FontSize.font14,
            fontWeight: 'bold',
            color: 'grey',
          }}>
          ⭐⭐⭐⭐⭐
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.push('RateView');
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              marginBottom: 10,
              color: 'grey',
            }}>
            3 Reviews
          </Text>
        </TouchableOpacity>
        <View
          style={{width: 'auto', height: 0.5, backgroundColor: 'grey'}}></View>
        <Text
          style={{
            marginTop: 10,
            fontSize: FontSize.font15,
            fontWeight: 'bold',
            paddingHorizontal: 15,
            paddingVertical: 10,
            color: 'black',
          }}>
          Account
        </Text>
        <View style={[styles.FrmName]}>
          <Ionicons
            name="business-outline"
            size={18}
            color={'black'}></Ionicons>
          <Text
            style={{
              fontSize: FontSize.font14,
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
              fontSize: FontSize.font14,
              color: 'black',
              paddingLeft: 10,
            }}>
            longthavsipav@gmail.com
          </Text>
        </View>
        <View style={styles.BoxText}>
          <AntDesign name="infocirlceo" size={18} color={'black'}></AntDesign>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{fontSize: FontSize.font14, color: 'black'}}>
              បម្រើសេវាកម្មជូនអស់លោក​ លោកស្រីឲកាន់តែ
            </Text>
            <Text style={{fontSize: FontSize.font14, color: 'black'}}>
              មានប្រសិទ្ទភាព គុណភាព ទំនុកចិត្ត និងក្ដី
            </Text>
            <Text style={{fontSize: FontSize.font14, color: 'black'}}>
              ស្រលាញ់
              សូមអញ្ជើញមកទទូលយកនូវសេវាកម្មទៅតាមតម្រូវការរបស់អតិថិជនមាននៅហាងMen
              Style Barbar Shop Academy
            </Text>
          </View>
        </View>
        <View style={styles.FrmName}>
          <Ionicons name="call-outline" size={18} color={'black'}></Ionicons>
        </View>
        <View style={styles.FrmName}>
          <Ionicons
            name="phone-portrait-outline"
            size={18}
            color={'black'}></Ionicons>
          <Text
            style={{
              fontSize: FontSize.font14,
              color: 'black',
              paddingLeft: 10,
            }}>
            715636246
          </Text>
        </View>
        <View style={styles.FrmName}>
          <MaterialIcons
            name="date-range"
            size={18}
            color={'black'}></MaterialIcons>
          <Text
            style={{
              fontSize: FontSize.font14,
              color: 'black',
              paddingLeft: 10,
            }}>
            Mon, Tue, Wed, Thu, Fri, Sat, Sun
          </Text>
        </View>
        <View style={styles.FrmName}>
          <Octicons name="clock" size={18} color={'black'}></Octicons>
          <Text
            style={{
              fontSize: FontSize.font14,
              color: 'black',
              paddingLeft: 10,
            }}>
            08:00 - 19:00
          </Text>
        </View>
        <View style={styles.TxtLocation}>
          <Text
            style={{
              color: 'black',
              fontSize: FontSize.font14,
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
                  fontSize: FontSize.font14,
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
        <View style={styles.FrmNameII}>
          <EvilIcons name="location" size={18} color={'black'}></EvilIcons>
          <Text
            style={{
              fontSize: FontSize.font14,
              color: 'black',
              paddingLeft: 10,
            }}>
            103 St 512, Phnom Penh, Cambodia
          </Text>
        </View>
        <View
          style={{
            marginVertical: 15,
            width: 'auto',
            height: 1,
            backgroundColor: '#f2f2f2',
          }}></View>
        <Text
          style={{
            paddingLeft: 20,
            paddingBottom: 15,
            color: 'black',
            fontWeight: 'bold',
            fontSize: FontSize.font14,
          }}>
          Features
        </Text>
        <View style={styles.FrmFeature}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{width: 20, height: 20, paddingLeft: 10, marginRight: 10}}>
              <Image
                style={{flex: 1, width: undefined, height: undefined}}
                source={require('../../assets/imgs/loudspeaker.png')}></Image>
            </View>
            <Text
              style={{
                fontSize: FontSize.font14,
                marginLeft: 5,
                marginTop: 3,
                color: '#16247d',
              }}>
              PROMOTION
            </Text>
          </View>
          <MaterialIcons
            size={18}
            color={'#16247d'}
            name="arrow-forward-ios"></MaterialIcons>
        </View>
        <View style={styles.FrmFeature}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{width: 20, height: 20, paddingLeft: 10, marginRight: 10}}>
              <Image
                style={{flex: 1, width: undefined, height: undefined}}
                source={require('../../assets/imgs/loudspeaker.png')}></Image>
            </View>
            <Text
              style={{
                fontSize: FontSize.font14,
                marginLeft: 5,
                marginTop: 3,
                color: '#16247d',
              }}>
              OUR SERVICES
            </Text>
          </View>
          <MaterialIcons
            size={18}
            color={'#16247d'}
            name="arrow-forward-ios"></MaterialIcons>
        </View>
        <View style={styles.FrmFeature}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{width: 20, height: 20, paddingLeft: 10, marginRight: 10}}>
              <Image
                style={{flex: 1, width: undefined, height: undefined}}
                source={require('../../assets/imgs/loudspeaker.png')}></Image>
            </View>
            <Text
              style={{
                fontSize: FontSize.font14,
                marginLeft: 5,
                marginTop: 3,
                color: '#16247d',
              }}>
              JOIN MEMEBERSHIP
            </Text>
          </View>
          <MaterialIcons
            size={18}
            color={'#16247d'}
            name="arrow-forward-ios"></MaterialIcons>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: '#ebebec',
            marginTop: 10,
          }}></View>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 10,
            fontSize: FontSize.font14,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Our Professional
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {ListProfessor.map((e, index) => {
            indexs === index;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.push('ProfessionalDetailView', {
                    name: e.name,
                    role: e.role,
                    rate: e.rate,
                    other: e.other,
                    id: e.id,
                    phone: e.phone,
                    mail: e.mail,
                    location: e.location,
                    professional: e.professional,
                  });
                }}>
                <View style={[styles.Card, {marginLeft: index == 0 ? 15 : 0}]}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: 'white',
                      borderRadius: 50 / 2,
                    }}>
                    <Image
                      style={{
                        flex: 1,
                        width: 50,
                        height: 50,
                        borderRadius: 50 / 2,
                      }}
                      source={require('../../assets/imgs/img1.jpg')}></Image>
                  </View>
                  <Text
                    style={{
                      paddingTop: 5,
                      color: '#16247d',
                      fontWeight: 'bold',
                      fontSize: FontSize.font12,
                    }}>
                    {e.role}
                  </Text>
                  <Text
                    style={{
                      paddingTop: 0,
                      color: '#16247d',
                      fontWeight: 'bold',
                      fontSize: FontSize.font12,
                    }}>
                    {e.name}
                  </Text>
                  <Text
                    style={{
                      paddingTop: 5,
                      color: 'grey',
                      fontWeight: 'bold',
                      fontSize: FontSize.font12,
                    }}>
                    ⭐⭐⭐⭐⭐({e.rate})
                  </Text>
                  <Text
                    style={{
                      paddingTop: 5,
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: FontSize.font12,
                    }}>
                    {e.other}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: '#ebebec',
            marginVertical: 20,
          }}></View>
        <Text
          style={{
            paddingLeft: 20,
            color: 'black',
            fontWeight: 'bold',
            fontSize: FontSize.font14,
            lineHeight: 18,
          }}>
          Mobile Service
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {MobileServieData.map((e, index) => {
            5;
            return (
              <View
                key={index}
                style={[styles.CardII, {marginLeft: index == 0 ? 15 : 0}]}>
                <Text
                  style={{
                    color: 'grey',
                    position: 'absolute',
                    left: 0,
                    paddingLeft: 10,
                    paddingTop: 10,
                    fontSize: FontSize.font12,
                  }}>
                  {e.point}pts
                </Text>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'white',
                    borderRadius: 60 / 2,
                    marginTop: 15,
                  }}>
                  <Image
                    style={{
                      flex: 1,
                      width: 60,
                      height: 60,
                      borderRadius: 60 / 2,
                    }}
                    source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <Text
                  style={{
                    fontSize: FontSize.font12,
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 5,
                    textAlign: 'center',
                    paddingVertical: 0,
                  }}>
                  {e.name}
                </Text>
                <Text
                  style={{
                    fontSize: FontSize.font12,
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                  {e.price}
                </Text>
                <TouchableOpacity
                  style={{marginTop: e.name.length <= 16 ? 11 : 0}}
                  activeOpacity={1}
                  onPress={() => {
                    console.log('Start Order...');
                    navigation.push('ChooseMobileServiceView');
                    console.log(e.name.length);
                  }}>
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderWidth: 1,
                      marginTop: index == 1 ? 8 : 10,
                      borderColor: '#16247d',
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#16247d',
                        fontSize: height * 0.013,
                      }}>
                      {e.order}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: '#ebebec',
            marginVertical: 20,
          }}></View>
        <Text
          style={{
            paddingLeft: 20,
            color: 'black',
            fontWeight: 'bold',
            fontSize: FontSize.font14,
            lineHeight: 18,
          }}>
          Member Types
        </Text>
        {MemeberShipData.map((e, index) => {
          return (
            <View
              key={index}
              style={{
                marginHorizontal: 20,
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor: '#edeff3',
                marginTop: 12,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="ribbon-outline"
                  size={18}
                  style={{
                    color: 'black',
                    paddingRight: 15,
                  }}
                />
                <Text style={{color: 'black', fontSize: FontSize.font12}}>
                  {e.type}
                </Text>
              </View>
              <Text
                style={[
                  {
                    fontWeight: 'bold',
                    fontSize: FontSize.font12,
                  },
                  styles.txtColor,
                ]}>
                {e.score}
              </Text>
            </View>
          );
        })}
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
              paddingVertical: 8,
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

export default ShopDetailView;

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: -50,
  },
  FrmName: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#edeff3',
    borderRadius: 8,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
  },
  BoxText: {
    padding: 15,
    backgroundColor: '#edeff3',
    flexDirection: 'row',
    marginHorizontal: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  BottomBar: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  TxtLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  FrmNameII: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#edeff3',
    borderRadius: 8,
    marginHorizontal: 15,
    marginTop: 0,
    flexDirection: 'row',
  },
  FrmFeature: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#dedede',
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginBottom: 10,
  },
  Card: {
    width: width * 0.3,
    backgroundColor: '#edeff3',
    marginRight: 12,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 10,
    paddingBottom: 15,
  },
  CardII: {
    paddingHorizontal: 15,
    width: width * 0.3,
    backgroundColor: '#edeff3',
    marginRight: 12,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 10,
    paddingBottom: 15,
  },
  txtColor: {
    color: '#16247d',
  },
});


//https://www.youtube.com/watch?v=GM5O8erVxjM
