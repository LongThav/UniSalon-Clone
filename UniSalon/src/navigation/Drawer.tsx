import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import TestView from '../views/TestView';
import ProfileView from './../views/ProfileView';
import FavouriteView from './../views/FavouriteView';
import MessageView from '../views/MessageView';
import MemberShipView from '../views/MemberShipView';
import TodayBookingAndOrderView from '../views/TodayBookingAndOrderView';
import BookingAndOrder from '../views/BookingAndOrder';
import HistoryBookingAndOrderView from '../views/HistoryBookingAndOrderView';
import PaymentView from '../views/PaymentView';
import {useNavigation} from '@react-navigation/native';
import SettingView from '../views/SettingView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PrivacyPolicyView from '../views/PrivacyPolicyView';
import HelpAndFeedBack from '../views/HelpAndFeedBack';
import SignOutView from '../views/SignOutView';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomizeSideBar from '../component/CustomizeSideBar';
import {
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import App from '../../App';
import {Icon} from 'react-native-paper';
import LoginView from '../views/LoginView';
import CustomizeDrawer from './CustomizeDrawer';


const {width, height} = Dimensions.get('window');

const Drawer = createDrawerNavigator();

const data = [
  {
    title: 'Profile',
    icon: 'feed-person',
  },
  {
    title: 'Favourite',
    icon: 'feed-heart',
  },
  {
    title: 'Message',
    icon: 'feed-heart',
  },
];

const DrawerNavigate = () => {
  const navigation: any = useNavigation();
  return (
    <Drawer.Navigator
       
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 15}}>
              <View
                style={{
                  width: 'auto',
                  height: height * 0.3,
                  backgroundColor: '#16247d',
                }}>
                {/* <Image
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={require('../../assets/imgs/cover.jpg')}></Image> */}
                <View style={styles.Circle}>
                  <Text
                    style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
                    L
                  </Text>
                </View>
                <Text
                  style={{
                    position: 'absolute',
                    bottom: height * 0.035,
                    marginLeft: width * 0.05,
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  LongThav SiPav E1
                </Text>
              </View>
              <View style={styles.Container}>
                <View style={styles.Row}>
                  <Octicons
                    name="feed-person"
                    size={22}
                    color={'#16247d'}></Octicons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Profile
                  </Text>
                </View>
                <View style={styles.Row}>
                  <Octicons
                    name="feed-heart"
                    size={22}
                    color={'red'}></Octicons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Favourite
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 'auto',
                  height: 1,
                  backgroundColor: 'grey',
                  marginTop: 20,
                }}></View>
              <View style={styles.Container}>
                <View style={styles.Row}>
                  <MaterialCommunityIcons
                    name="email"
                    size={22}
                    color={'blue'}></MaterialCommunityIcons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Message
                  </Text>
                </View>
                <View style={styles.Row}>
                  <Octicons
                    name="feed-star"
                    size={22}
                    color={'#ffa042'}></Octicons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Membership
                  </Text>
                </View>
                <View style={styles.Row}>
                  <Fontisto name="date" size={22} color={'brown'}></Fontisto>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Today Booking & Order
                  </Text>
                </View>
                <View style={styles.Row}>
                  <MaterialIcons
                    name="date-range"
                    size={22}
                    color={'grey'}></MaterialIcons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Booking & Order
                  </Text>
                </View>
                <View style={styles.Row}>
                  <FontAwesome6
                    name="clock-rotate-left"
                    size={22}
                    color={'green'}></FontAwesome6>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    History Booking & Order
                  </Text>
                </View>
                <View style={styles.Row}>
                  <MaterialIcons
                    name="payment"
                    size={22}
                    color={'grey'}></MaterialIcons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Payment
                  </Text>
                </View>
                <View
                  style={{
                    width: 'auto',
                    height: 1,
                    backgroundColor: 'grey',
                    marginTop: 20,
                  }}></View>
                <View style={styles.Row}>
                  <Fontisto
                    name="player-settings"
                    color={'grey'}
                    size={22}></Fontisto>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Settings
                  </Text>
                </View>
                <View style={styles.Row}>
                  <MaterialIcons
                    name="privacy-tip"
                    size={22}
                    color={'green'}></MaterialIcons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Privacy Policy
                  </Text>
                </View>
                <View style={styles.Row}>
                  <AntDesign
                    name="questioncircle"
                    size={22}
                    color={'grey'}></AntDesign>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Help & Feedback
                  </Text>
                </View>
               <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                navigation.push('LoginView');
               }}>
               <View style={styles.Row}>
                  <Ionicons
                    name="log-out-outline"
                    size={22}
                    color={'red'}></Ionicons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Sign Out
                  </Text>
                </View>
               </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        );
      }}
      screenOptions={{
        // drawerType: 'slide',
        headerTransparent: false,
        headerShown: false,
        drawerStyle: {width: '70%'},
      }}>
      {/* <Drawer.Screen name="LoginView" component={LoginView}/> */}
      <Drawer.Screen name="App" component={App} />
      <Drawer.Screen
        name="Profile"
        component={ProfileView}
        options={{
          title: 'Profile',
          drawerIcon: ({focused, size}) => (
            <Octicons name="feed-person" size={30} color={'#16247d'}></Octicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteView}
        options={{
          title: 'Favourite',
          drawerIcon: ({focused, size}) => (
            <Octicons name="feed-heart" size={30} color={'red'}></Octicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={MessageView}
        options={{
          title: 'Message',
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="email"
              size={30}
              color={'blue'}></MaterialCommunityIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="Membership"
        component={MemberShipView}
        options={{
          title: 'Membership',
          drawerIcon: ({focused, size}) => (
            <Octicons name="feed-star" size={30} color={'#ffa042'}></Octicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Today Booking & Order"
        component={TodayBookingAndOrderView}
        options={{
          title: 'Booking & Order',
          drawerIcon: ({focused, size}) => (
            <Fontisto name="date" size={25} color={'brown'}></Fontisto>
          ),
        }}
      />
      <Drawer.Screen
        name="Booking & Order"
        component={BookingAndOrder}
        options={{
          title: 'Booking & Order',
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
              name="date-range"
              size={30}
              color={'grey'}></MaterialIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="History Booking & Order"
        component={HistoryBookingAndOrderView}
        options={{
          title: 'History Booking & Order',
          drawerIcon: ({focused, size}) => (
            <FontAwesome6
              name="clock-rotate-left"
              size={25}
              color={'green'}></FontAwesome6>
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={PaymentView}
        options={{
          title: 'Payment',
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
              name="payment"
              size={30}
              color={'grey'}></MaterialIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingView}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
            <Fontisto
              name="player-settings"
              color={'grey'}
              size={30}></Fontisto>
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={PrivacyPolicyView}
        options={{
          title: 'Privacy Policy',
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
              name="privacy-tip"
              size={30}
              color={'green'}></MaterialIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="Help & Feedback"
        component={HelpAndFeedBack}
        options={{
          title: 'Help & Feedback',
          drawerIcon: ({focused, size}) => (
            <AntDesign
              name="questioncircle"
              size={28}
              color={'grey'}></AntDesign>
          ),
        }}
      />
      <Drawer.Screen
        name="Sign Out"
        component={LoginView}
        options={{
          title: 'Sign Out',
          drawerIcon: ({focused, size}) => (
            <Ionicons name="log-out-outline" size={28} color={'red'}></Ionicons>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigate;

const styles = StyleSheet.create({
  Circle: {
    width: 80,
    height: 80,
    position: 'absolute',
    backgroundColor: 'blue',
    borderRadius: 80 / 2,
    bottom: height * 0.09,
    marginLeft: width * 0.15,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container: {
    marginHorizontal: 20,
  },
  Row: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
