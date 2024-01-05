import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  useWindowDimensions,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../constant/FontSize';

const {width, height} = Dimensions.get('window');

const Promotion = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{width: 'auto', height: '94%', backgroundColor: '#f1f1f1'}}>
      <TouchableOpacity
        activeOpacity={1}
        style={{width: 'auto', height: '94%'}}
        onPress={() => {
          console.log('Start press!');
          navigation.push('DetailPromotion');
        }}>
        <View style={[styles.CardPromotion, styles.shadow]}>
          <View
            style={{
              width: width * 0.3,
              height: height * 0.15,
              backgroundColor: '#ebebec',
              borderRadius: 10,
            }}>
            <Image
              style={{
                width: undefined,
                height: undefined,
                flex: 1,
                borderRadius: 8,
              }}
              source={require('../../assets/imgs/img1.jpg')}></Image>
          </View>
          <View
            style={{paddingLeft: 10, paddingTop: 0, alignItems: 'flex-start'}}>
            <Text
              style={{
                fontSize: FontSize.font16,
                color: 'black',
              }}>
              កាត់សក់បុរស
            </Text>
            <Text
              style={{
                marginVertical: 5,
                color: '#16247d',
                fontSize: FontSize.font16,
                fontWeight: 'bold',
              }}>
              មែន​ ស្តាយ
            </Text>
            <Text style={{color: 'grey', fontSize: 12, marginBottom: 5}}>
              ⭐⭐⭐⭐⭐ (3)
            </Text>
            <Text style={{color: 'grey', fontSize: 14}}>
              កាត់សក់បុរស free កក់សក់ជូន
            </Text>
            <View style={{flexDirection: 'row', paddingVertical: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingRight: 20,
                }}>
                <FontAwesome6
                  name="location-dot"
                  size={11}
                  style={{paddingRight: 5, marginTop: 2.2}}
                  color={'#16247d'}></FontAwesome6>
                <Text
                  style={{
                    color: '#16247d',
                    fontWeight: 'bold',
                    fontSize: FontSize.font12,
                  }}>
                  None
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome6
                  name="clock"
                  size={11}
                  style={{paddingRight: 5, marginTop: 2.2}}
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
      </TouchableOpacity>
    </View>
  );
};

const Reward = () => (
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

const renderScene = SceneMap({
  first: Promotion,
  third: Reward,
});

export const PromotionView = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Promotions'},
    {key: 'third', title: 'Rewards'},
  ]);
  const navigation: any = useNavigation();
  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((_: any, i: any) => i);
    return (
      <>
        <TabBar
          {...props}
          scrollEnabled
          indicatorStyle={styles.indicator}
          style={{
            backgroundColor: '#f2f2f2',
          }}
          tabStyle={{
            width: width / 2,
          }}
          renderLabel={({route, focused, color}) => {
            let index = 0;
            return (
              <View style={{}}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width / 2,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: focused ? '#16247d' : 'black',
                      margin: 8,
                      fontSize: FontSize.font14,
                      fontWeight: 'bold',
                    }}>
                    {route.title}
                  </Text>
                  <View
                    style={
                      route.title == 'Promotions' ? styles.divider : null
                    }></View>
                </View>
              </View>
            );
          }}></TabBar>
      </>
    );
  };
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.openDrawer();
          <View style={styles.Appbar}>
            <Feather
              name="menu"
              size={24}
              style={{
                color: 'white',
                paddingRight: 125,
              }}
            />
            <Text style={styles.TitleAppbar}>Shops</Text>
          </View>;
        }}>
        <View style={styles.Appbar}>
          <Feather
            name="menu"
            size={24}
            style={{
              color: 'white',
              position: 'absolute',
              left: 15,
            }}
          />
          <Text style={styles.TitleAppbar}>Promotions</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.RibonReward}>
        <Ionicons
          onPress={() => {
            console.log('Hi');
          }}
          name="ribbon-outline"
          size={45}
          style={{
            color: '#16247d',
            paddingRight: 15,
          }}
        />
        <View style={{flexDirection: 'column', flex: 1}}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 17.1,
              color: '#16247d',
              paddingVertical: 0,
            }}>
            Your current points of all salon shops 0 Point.
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 'auto',
          height: 3,
          backgroundColor: '#ebebec',
          marginTop: '3%',
        }}></View>
      <View style={styles.TabBar}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          pageMargin={1}
          style={{
            backgroundColor: 'white',
          }}
          renderTabBar={renderTabBar}
        />
      </View>
      <View style={styles.CardPromotion}>
        <View
          style={{
            width: 90,
            height: 90,
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
        <View style={{paddingLeft: 10, alignItems: 'flex-start'}}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
            }}>
            កាត់សក់បុរស
          </Text>
          <Text>មែន​ ស្តាយ</Text>
          <Text>⭐⭐⭐⭐⭐ (3)</Text>
          <Text>កាត់សក់បុរស free កក់សក់ជូន</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Appbar: {
    width: 'auto',
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingVertical: 12
  },
  TitleAppbar: {
    fontSize: FontSize.font15,
    color: 'white',
    fontWeight: 'bold',
  },
  RibonReward: {
    width: 'auto',
    height: 80,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  BottomTab: {
    width: 'auto',
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },

  TabBar: {
    width: 'auto',
    height: '80%',
  },
  CardPromotion: {
    width: 'auto',
    borderColor: '#ebebec',
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  TabBarView: {},
  indicator: {
    backgroundColor: '#16247d',
    height: 2,
  },
  shadow: {
    elevation: 1.5,
    shadowColor: '#52006A',
  },
  divider: {
    width: 1.8,
    height: '100%',
    backgroundColor: 'gray',
    position: 'absolute',
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

// https://www.google.com/search?q=Add+vertical+line+as+a+divider+in+tabbar+as+a+divider+React+native&sca_esv=586559691&tbm=isch&sxsrf=AM9HkKlrPuK7LAIls7m6oDbs5-JvMnmRDA:1701333781596&source=lnms&sa=X&ved=2ahUKEwjF18idquuCAxUZslYBHSx-CxIQ_AUoAXoECAEQAw&biw=1707&bih=794&dpr=1.13
