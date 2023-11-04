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

//navigation.openDrawer();
const {width, height} = Dimensions.get('window');
export const ShopView = () => {
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
        <EvilIcons name="search" size={24} color="grey" />
        {/* <Text style={{ paddingHorizontal: 10 }}>Search Salons...</Text> */}
        <TextInput
          placeholder="Search Salons..."
          placeholderTextColor={'grey'}
          style={{
            fontSize: 20,
            marginLeft: 0,
            margin: 0,
            padding: 0,
          }}></TextInput>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 18,
            color: '#16247d',
            paddingVertical: 15,
            marginHorizontal: 15,
          }}>
          Recommend Salons
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('Push new screen');
                navigation.push('ShopDetailView')
            }}>
            <View style={{width: 'auto', height: 160, marginHorizontal: 15}}>
              <View
                style={{
                  width: 150,
                  height: 60,
                  backgroundColor: 'grey',
                  marginBottom: 8,
                }}>
                <Image
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={require('../../assets/imgs/img1.jpg')}></Image>
              </View>
              <Text style={{color: 'grey'}}>មែនស្តាយ</Text>
              <Text style={{color: 'grey'}}>⭐⭐⭐⭐⭐ (3)</Text>
              <View
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
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('Push new screen');
              navigation.push('ShopDetailView');
            }}>
            <View style={{width: 'auto', height: 160, marginHorizontal: 15}}>
              <View
                style={{
                  width: 150,
                  height: 60,
                  backgroundColor: 'grey',
                  marginBottom: 8,
                }}>
                <Image
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={require('../../assets/imgs/img1.jpg')}></Image>
              </View>
              <Text style={{color: 'grey'}}>មែនស្តាយ</Text>
              <Text style={{color: 'grey'}}>⭐⭐⭐⭐⭐ (3)</Text>
              <View
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
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              console.log('Push new screen');
              navigation.push('ShopDetailView');
            }}>
            <View style={{width: 'auto', height: 160, marginHorizontal: 15}}>
              <View
                style={{
                  width: 150,
                  height: 60,
                  backgroundColor: 'grey',
                  marginBottom: 8,
                }}>
                <Image
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={require('../../assets/imgs/img1.jpg')}></Image>
              </View>
              <Text style={{color: 'grey'}}>មែនស្តាយ</Text>
              <Text style={{color: 'grey'}}>⭐⭐⭐⭐⭐ (3)</Text>
              <View
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
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <Text
          style={{
            paddingLeft: 15,
            paddingTop: 15,
            fontSize: 18,
            color: '#16247d',
          }}>
          More Salons
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log('Click ប៉ែន');
            navigation.push('ShopDetailView');
          }}>
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              marginHorizontal: 15,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: 120,
                height: 120,
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
            <View style={{marginRight: width * 0.05}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 15,
                }}>
                <View>
                  <Text style={{fontSize: 18, color: 'black'}}>ប៉ែន ស្តាយ</Text>
                  <Text style={{color: 'grey'}}>⭐⭐⭐⭐⭐ (3)</Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 17,
                  paddingVertical: 10,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  បម្រើសេវាកម្មជូនអស់លោក
                </Text>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 15,
                      paddingRight: 20,
                    }}>
                    <FontAwesome6
                      name="location-dot"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      None
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', paddingVertical: 15}}>
                    <FontAwesome6
                      name="clock"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      Opening
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
                right: 0,
                marginTop: 17,
              }}>
              <Text style={{color: 'grey'}}>Booking</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log('Click ប៉ែន');
            navigation.push('ShopDetailView');
          }}>
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              marginHorizontal: 15,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: 120,
                height: 120,
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
            <View style={{marginRight: width * 0.05}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 15,
                }}>
                <View>
                  <Text style={{fontSize: 18, color: 'black'}}>ប៉ែន ស្តាយ</Text>
                  <Text style={{color: 'grey'}}>⭐⭐⭐⭐⭐ (3)</Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 17,
                  paddingVertical: 10,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  បម្រើសេវាកម្មជូនអស់លោក
                </Text>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 15,
                      paddingRight: 20,
                    }}>
                    <FontAwesome6
                      name="location-dot"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      None
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', paddingVertical: 15}}>
                    <FontAwesome6
                      name="clock"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      Opening
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
                right: 0,
                marginTop: 17,
              }}>
              <Text style={{color: 'grey'}}>Booking</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log('Click ប៉ែន');
            navigation.push('ShopDetailView');
          }}>
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              marginHorizontal: 15,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: 120,
                height: 120,
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
            <View style={{marginRight: width * 0.05}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 15,
                }}>
                <View>
                  <Text style={{fontSize: 18, color: 'black'}}>ប៉ែន ស្តាយ</Text>
                  <Text style={{color: 'grey'}}>⭐⭐⭐⭐⭐ (3)</Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 17,
                  paddingVertical: 10,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  បម្រើសេវាកម្មជូនអស់លោក
                </Text>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 15,
                      paddingRight: 20,
                    }}>
                    <FontAwesome6
                      name="location-dot"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      None
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', paddingVertical: 15}}>
                    <FontAwesome6
                      name="clock"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      Opening
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
                right: 0,
                marginTop: 17,
              }}>
              <Text style={{color: 'grey'}}>Booking</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log('Click ប៉ែន');
            navigation.push('ShopDetailView');
          }}>
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              marginHorizontal: 15,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: 120,
                height: 120,
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
            <View style={{marginRight: width * 0.05}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 15,
                }}>
                <View>
                  <Text style={{fontSize: 18, color: 'black'}}>ប៉ែន ស្តាយ</Text>
                  <Text style={{color: 'grey'}}>⭐⭐⭐⭐⭐ (3)</Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 17,
                  paddingVertical: 10,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  បម្រើសេវាកម្មជូនអស់លោក
                </Text>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 15,
                      paddingRight: 20,
                    }}>
                    <FontAwesome6
                      name="location-dot"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      None
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', paddingVertical: 15}}>
                    <FontAwesome6
                      name="clock"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      Opening
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
                right: 0,
                marginTop: 17,
              }}>
              <Text style={{color: 'grey'}}>Booking</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log('Click ប៉ែន');
            navigation.push('ShopDetailView');
          }}>
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              marginHorizontal: 15,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: 120,
                height: 120,
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
            <View style={{marginRight: width * 0.05}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 15,
                }}>
                <View>
                  <Text style={{fontSize: 18, color: 'black'}}>ប៉ែន ស្តាយ</Text>
                  <Text style={{color: 'grey'}}>⭐⭐⭐⭐⭐ (3)</Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 17,
                  paddingVertical: 10,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  បម្រើសេវាកម្មជូនអស់លោក
                </Text>
                <Text style={{fontSize: 14.5, color: 'grey'}}>
                  លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 15,
                      paddingRight: 20,
                    }}>
                    <FontAwesome6
                      name="location-dot"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      None
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', paddingVertical: 15}}>
                    <FontAwesome6
                      name="clock"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text style={{color: '#16247d', fontWeight: 'bold'}}>
                      Opening
                    </Text>
                  </View>
                </View>
              </View>
            </View>
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
                right: 0,
                marginTop: 17,
              }}>
              <Text style={{color: 'grey'}}>Booking</Text>
            </View>
          </View>
        </TouchableOpacity>
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
  },
  SearchBar: {
    width: 'auto',
    margin: 15,
    height: 45,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
});
