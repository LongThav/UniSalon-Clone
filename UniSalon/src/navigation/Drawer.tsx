import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import TestView from '../views/TestView';
import ProfileView from "./../views/ProfileView";
import FavouriteView from "./../views/FavouriteView";
import MessageView from '../views/MessageView';
import MemberShipView from '../views/MemberShipView';
import TodayBookingAndOrderView from '../views/TodayBookingAndOrderView';
import BookingAndOrder from '../views/BookingAndOrder';
import HistoryBookingAndOrderView from '../views/HistoryBookingAndOrderView';
import PaymentView from '../views/PaymentView';
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


import App from '../../App';
import { Icon } from 'react-native-paper';

const Drawer = createDrawerNavigator();

const DrawerNavigate = () => {
    return (
        <Drawer.Navigator 
          initialRouteName='Home'

          screenOptions={{
            // drawerType: 'slide',
            headerTransparent: false,
            headerShown: false,
            drawerStyle: { width: '80%' },
        }}>
            <Drawer.Screen name="App" component={App}
            />
            <Drawer.Screen name="Profile" component={ProfileView}
                options={{
                    title: 'Profile',
                    drawerIcon: ({ focused, size }) => (
                        <Octicons name='feed-person' size={30} color={'#16247d'}></Octicons>
                    ),
                    
                }}
            />
            <Drawer.Screen name="Favourite" component={FavouriteView}
                options={{
                    title: 'Favourite',
                    drawerIcon: ({ focused, size }) => (
                        <Octicons name='feed-heart' size={30} color={'red'}></Octicons>
                    ),
                }}
            />
            <Drawer.Screen name="Message" component={MessageView}
                options={{
                    title: 'Message',
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons name='email' size={30} color={'blue'}></MaterialCommunityIcons>
                    ),
                }}
            />
            <Drawer.Screen name="Membership" component={MemberShipView}
                options={{
                    title: 'Membership',
                    drawerIcon: ({ focused, size }) => (
                        <Octicons name='feed-star' size={30} color={'#ffa042'}></Octicons>
                    ),
                }}
            />
            <Drawer.Screen name="Today Booking & Order" component={TodayBookingAndOrderView}
                options={{
                    title: 'Booking & Order',
                    drawerIcon: ({ focused, size }) => (
                        <Fontisto name='date' size={25} color={'brown'}></Fontisto>
                    ),
                }}
            />
            <Drawer.Screen name="Booking & Order" component={BookingAndOrder}
                options={{
                    title: 'Booking & Order',
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons name='date-range' size={30} color={'grey'}></MaterialIcons>
                    ),
                }} />
            <Drawer.Screen name="History Booking & Order" component={HistoryBookingAndOrderView}
                options={{
                    title: 'History Booking & Order',
                    drawerIcon: ({ focused, size }) => (
                        <FontAwesome6 name='clock-rotate-left' size={25} color={'green'}></FontAwesome6>
                    ),
                }}
            />
            <Drawer.Screen name="Payment" component={PaymentView}
                options={{
                    title: 'Payment',
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons name='payment' size={30}></MaterialIcons>
                    ),
                }}
            />
            <Drawer.Screen name="Settings" component={SettingView}
                options={{
                    title: 'Settings',
                    drawerIcon: ({ focused, size }) => (
                        <Fontisto name='player-settings' size={30}></Fontisto>
                    ),
                }}
            />
            <Drawer.Screen name="Privacy Policy" component={PrivacyPolicyView}
                options={{
                    title: 'Privacy Policy',
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons name='privacy-tip' size={30} color={'green'}></MaterialIcons>
                    ),
                }}
            />
            <Drawer.Screen name="Help & Feedback" component={HelpAndFeedBack}
                options={{
                    title: 'Help & Feedback',
                    drawerIcon: ({ focused, size }) => (
                        <AntDesign name='questioncircle' size={28} color={'grey'}></AntDesign>
                    ),
                }}
            />
            <Drawer.Screen name="Sign Out" component={SignOutView}
                options={{
                    title: 'Sign Out',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons name='log-out-outline' size={28} color={'red'}></Ionicons>
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigate;