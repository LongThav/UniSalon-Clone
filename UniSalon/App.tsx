import React, {useEffect} from 'react';
import {HomeView} from './src/views/HomeView';
import {ShopView} from './src/views/ShopView';
import {VideoView} from './src/views/VideoView';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProfessorView} from './src/views/ProfessorsView';
import {PromotionView} from './src/views/PromotionView';
import {View, Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {
  console.log('Start tabbar');
  // useEffect(() => {
  //   if (Platform.OS === 'android') SplashScreen.hide();
  // }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Entypo
                  name="location"
                  size={20}
                  color={focused ? '#16247d' : 'grey'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? '#16247d' : 'grey',
                    marginRight: 0,
                  }}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Shops"
        component={ShopView}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Entypo
                  name="shop"
                  size={20}
                  color={focused ? '#16247d' : 'grey'}
                />
                <Text
                  style={{fontSize: 12, color: focused ? '#16247d' : 'grey'}}>
                  Shops
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Videos"
        component={VideoView}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome
                  name="video-camera"
                  size={20}
                  color={focused ? '#16247d' : 'grey'}
                />
                <Text
                  style={{fontSize: 12, color: focused ? '#16247d' : 'grey'}}>
                  Videos
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Professors"
        component={ProfessorView}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons
                  name="person"
                  size={20}
                  color={focused ? '#16247d' : 'grey'}
                />
                <Text
                  style={{fontSize: 12, color: focused ? '#16247d' : 'grey'}}>
                  Professor
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={PromotionView}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons
                  name="gift"
                  size={20}
                  color={focused ? '#16247d' : 'grey'}
                />
                <Text
                  style={{fontSize: 12, color: focused ? '#16247d' : 'grey'}}>
                  Promotions
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
