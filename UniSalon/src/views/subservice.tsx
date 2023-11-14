import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FontSize} from '../constant/FontSize';
const {width, height} = Dimensions.get('window');

const MenData = [
  {
    id: '1',
    title: 'កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...',
    price: '$10.00',
    booking: 'Booking',
    img: '../../assets/imgs/img1.jpg',
  },
  {
    id: '1',
    title: 'កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...',
    price: '$10.00',
    booking: 'Booking',
    img: '../../assets/imgs/img1.jpg',
  },
  {
    id: '1',
    title: 'កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...',
    price: '$10.00',
    booking: 'Booking',
    img: '../../assets/imgs/img1.jpg',
  },
];

const Kid = () => {
  return (
    <View style={{backgroundColor: '#f1f1f1'}}>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...
          </Text>
          <Text style={{fontSize: FontSize.font12, marginTop: 8}}>
            ពិន្ទុ:0.5 ដង.ហ្វ្រីរកក់សក់.ធ្វើម៉ូតសក់
          </Text>
          <Text style={{fontSize: FontSize.font12, marginTop: 5}}>
            ដោយឥតគិតថ្លៃ😍
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $6.00
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            Popular Hairstyles
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $5.0
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
                marginLeft: 12,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Women = () => {
  return (
    <View style={{backgroundColor: '#f1f1f1'}}>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            កាត់ សក់​.ម៉ូត.លូរហ្វេត.ហាយហ្វេត.
          </Text>
          <Text style={{fontSize: FontSize.font12, marginTop: 8}}>0.5</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $10.00
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            Popular Hairstyles
          </Text>
          <Text style={{fontSize: FontSize.font12, marginTop: 8}}>
            Popular Hairstyles
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $10.00
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            Popular Hairstyles
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $10.00
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Men = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#f1f1f1', flex: 1}}>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            Hight Fan Hairstyles
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $10.00
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            Classic
          </Text>
          <Text style={{fontSize: FontSize.font12, marginTop: 8}}>
            Classic Model លក្ខណះសុភាពរាបសារ
          </Text>
          <Text>សាកសមគ្រប់វិស័យ</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $10.00
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...
          </Text>
          <Text style={{fontSize: FontSize.font12, marginTop: 8}}>
            Popular Hairstyles
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $10.00
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...
          </Text>
          <Text style={{fontSize: FontSize.font12, marginTop: 8}}>
            Popular Hairstyles
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $10.00
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.CardListMen}>
        <View style={{width: '30%', height: '100%'}}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...
          </Text>
          <Text style={{fontSize: FontSize.font12, marginTop: 8}}>
            Popular Hairstyles
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginRight: '32%',
                marginTop: 20,
                fontSize: FontSize.font12,
                color: 'red',
                fontWeight: 'bold',
              }}>
              $10.00
            </Text>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: '#16247d',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontSize: FontSize.font12,
                  color: '#16247d',
                  fontWeight: 'bold',
                }}>
                Booking
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  first: Men,
  second: Women,
  third: Kid,
});

export const SubService = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Men',
    },
    {
      key: 'second',
      title: 'Women',
    },
    {
      key: 'third',
      title: 'Kid',
    },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled={true}
      indicatorStyle={styles.indicator}
      style={{
        backgroundColor: 'white',
      }}
      tabStyle={{
        width: width / 3,
        // backgroundColor: 'blue'
      }}
      // renderLabel={({props, }) => (
      //     <Text style={{ color: 'grey', margin: 8 }}>
      //       {props.route.title}
      //     </Text>
      //   )}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? '#16247d' : 'black',
            margin: 8,
            fontSize: FontSize.font14,
            fontWeight: 'bold',
          }}>
          {route.title}
        </Text>
      )}></TabBar>
  );

  const naviation: any = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            naviation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={28}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Sub Service</Text>
        <AntDesign
          name="hearto"
          size={25}
          color={'white'}
          style={{marginRight: 0}}></AntDesign>
      </View>
      {/* <View style={styles.Body}>
                <View style={styles.RowBodyI}>
                    <View style={styles.Image}>
                        <Image style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                    </View>
                    <View style={styles.FixText}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 8, paddingRight: 0}}>កាត់សក់បុរស</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 8, color: 'red' }}>$ 5.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#16247d', fontSize: 16, paddingBottom: 10, fontWeight: 'bold' }}>មែន​ ស្តាយ</Text>
                            <Text style={{ color: 'red', fontSize: 16, paddingBottom: 10, }}>Up</Text>
                        </View>
                        <Text style={{ fontSize: 16, paddingBottom: 10 }}>⭐⭐⭐⭐⭐ (3)</Text>
                        <Text style={{ fontSize: 16, color: 'grey', paddingBottom: 7 }}>ហាងយើងខ្ញុំផ្ដល់ជូនទាំងគុណភាព​ និង</Text>
                        <Text style={{ fontSize: 16, color: 'grey' }}>អនាម័យ ជូនបងប្អូន</Text>
                    </View>
                </View>
                <View style={{alignContent: 'center', flexDirection: 'row',  justifyContent: 'center', position: 'absolute', bottom: height * 0.35, right: width * 0.35 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <FontAwesome6 name='location-dot' color={'#16247d'}></FontAwesome6>
                        <Text style={{ color: '#16247d', fontWeight: 'bold', paddingLeft: 5 }}>None</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 0 }}>
                        <EvilIcons name='clock' color={'#16247d'} size={22}></EvilIcons>
                        <Text style={{ color: '#16247d', fontWeight: 'bold', paddingLeft: 5 }}>None</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', alignItems: 'center', alignSelf: 'center', bottom: height * 0.25  }}>
                    <TouchableOpacity onPress={()=>{
                        console.log("Click");
                        naviation.push('GalleryView');
                    }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#edeff3', borderRadius: 20 }}>
                            <FontAwesome name='image' size={23} color={'grey'}></FontAwesome>
                            <Text style={{ marginLeft: 10, color: 'grey' }}>Gallery</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        console.log("Make a Booking");
                        naviation.push('MakeBookingView');
                    }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#edeff3', marginLeft: 18, borderRadius: 20 }}>
                        <AntDesign name='isv' size={23} color={'#16247d'}></AntDesign>
                        <Text style={{ marginLeft: 10, color: '#16247d', fontWeight: 'bold' }}>MAKE A BOOKING</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.TabBar}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    style={{
                        backgroundColor: 'white'
                    }}
                    renderTabBar={renderTabBar}
                ></TabView>
            </View> */}
      <View style={styles.bordDetail}>
        <View style={styles.Img}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={require('../../assets/imgs/img1.jpg')}></Image>
        </View>
        <View style={{paddingHorizontal: 5, width: '60%', paddingLeft: 10}}>
          <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: 'black',
            }}>
            កាត់សក់បុរស
          </Text>
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              fontSize: FontSize.font12,
            }}>
            មែន ស្តាយ
          </Text>
          <Text
            style={{
              color: 'grey',
              paddingVertical: 5,
              fontSize: FontSize.font12,
            }}>
            ⭐⭐⭐⭐⭐​ (3)
          </Text>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              fontSize: FontSize.font12,
            }}>
            ហាងយើងខ្ញុំផ្ដល់ជូននៅទាំងគុណភាពនិងអនាម័យជូនបងប្អូន
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            marginRight: 15,
            marginTop: 0,
          }}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: FontSize.font12,
            }}>
            $ 5.00
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'red',
              textAlign: 'right',
              marginRight: 0,
              fontSize: FontSize.font12,
            }}>
            Up
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <FontAwesome6
            size={12}
            name="location-dot"
            color={'#16247d'}></FontAwesome6>
          <Text
            style={{
              color: '#16247d',
              fontWeight: 'bold',
              paddingLeft: 5,
              fontSize: FontSize.font11,
            }}>
            None
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <EvilIcons name="clock" color={'#16247d'} size={17}></EvilIcons>
          <Text
            style={{
              color: '#16247d',
              fontWeight: 'bold',
              paddingLeft: 5,
              fontSize: FontSize.font12,
            }}>
            None
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('Click');
            naviation.push('GalleryView');
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: '#edeff3',
              borderRadius: 20,
            }}>
            <FontAwesome name="image" size={18} color={'grey'}></FontAwesome>
            <Text
              style={{
                marginLeft: 10,
                color: 'grey',
                fontSize: FontSize.font14,
              }}>
              Gallery
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('Make a Booking');
            naviation.push('FlowBookingView');
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: '#edeff3',
              marginLeft: 18,
              borderRadius: 20,
            }}>
            <AntDesign name="isv" size={18} color={'#16247d'}></AntDesign>
            <Text
              style={{
                marginLeft: 10,
                color: '#16247d',
                fontWeight: 'bold',
                fontSize: FontSize.font14,
              }}>
              MAKE A BOOKING
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{width: 'auto', height: 1, backgroundColor: '#eef1f6'}}></View>
      <View style={styles.TabBar}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{
            width: layout.width,
          }}
          style={{
            backgroundColor: 'white',
          }}
          renderTabBar={renderTabBar}></TabView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    backgroundColor: '#16247d',
    // alignItems: 'flex-start',
    paddingTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SubText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    // paddingHorizontal: '30%',
  },
  Body: {
    marginTop: 15,
    width: 'auto',
    borderWidth: 1,
    borderColor: '#eef2fa',
    marginHorizontal: 15,
    borderRadius: 10,
    paddingRight: 10,
    // backgroundColor: 'red'
  },
  RowBodyI: {
    width: 'auto',
    height: '48%',
    flexDirection: 'row',
  },
  Image: {
    width: width * 0.3,
    height: height * 0.2,
    backgroundColor: 'grey',
  },
  FixText: {
    paddingLeft: 10,
  },
  indicator: {
    backgroundColor: '#16247d',
    height: 2,
  },
  TabBar: {
    width: 'auto',
    height: '100%',
    // // backgroundColor: 'red'
    // marginTop: -width * 0.3,
  },
  CardListMen: {
    marginHorizontal: 15,
    padding: 10,
    width: 'auto',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 15,
  },
  CardListWomen: {
    width: 'auto',
    backgroundColor: 'white',
    marginHorizontal: 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 15,
  },
  bordDetail: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
  },
  Img: {
    width: 100,
    height: 100,
    // backgroundColor: 'grey',
  },
});
