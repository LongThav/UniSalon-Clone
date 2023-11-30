import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexView } from '../views/IndexView';
import { HomeView } from '../views/HomeView';
import { PromotionView } from '../views/PromotionView';
import { ProfessorView } from '../views/ProfessorsView';
import { ShopView } from '../views/ShopView';
import { VideoView } from '../views/VideoView';
import { DetailPromotion } from '../views/DetailPromotionView';
import { SubService } from '../views/SubService';
import {GalleryView} from '../views/GalleryView';
import {ViewImage} from '../views/ViewImage';
import { MakeBookingView } from '../views/MakeBookingView';
import {AssignProfessorView} from '../views/AssignProfessorView';
import {ChooseServiceView} from '../views/ChooseServiceView';
import { BookingDetailView } from '../views/BookingDetailView';
import { EditBookingView } from '../views/EditBookingView';
import DrawerNavigate from '../navigation/Drawer';

import App from '../../App';
import TestView from '../views/TestView';
import LoginView from '../views/LoginView';
import CreateAccountView from '../views/CreateAccountView';
import CreatePasswordView from '../views/CreatePasswordView';
import ForgotPasswordView from '../views/ForgotPasswordView';
import ShopDetailView from '../views/ShopDetailView';
import {ProfessionalDetailView} from '../views/ProfessionalDetailView';
import RateView from '../views/RateView';
import LocationShopView from '../views/LocationShopView';
import OrderView from '../views/OrderView';
import ChooseMobileServiceView from '../views/ChooseMobileServiceView';
import OrderDetailView from '../views/OrderDetailView';
import FlowBookingView from '../views/FlowBookingView';
import SelectProfessorView from '../views/SelectProfessorView';
import ProfessorDetailView from '../views/ProfessorDetailView';
import VideoPlayerView from '../views/VideoPlayView';
import MobileServiceView from '../views/MobileServiceView';
import ProfileView from '../views/ProfileView';
import FavouriteView from '../views/FavouriteView';
import MessageView from '../views/MessageView';
import TodayBookingAndOrderView from '../views/TodayBookingAndOrderView';
import BookingAndOrder from '../views/BookingAndOrder';
import HistoryBookingAndOrderView from '../views/HistoryBookingAndOrderView';
import PaymentView from '../views/PaymentView';
import MemberShipView from '../views/MemberShipView';
import SearchBarView from '../component/SearchBar';
import SettingView from '../views/SettingView';
import HelpAndFeedBack from '../views/HelpAndFeedBack';
import PrivacyPolicyView from '../views/PrivacyPolicyView';
import DetailExploreView from '../views/DetailExploreView';
import LoadingView from '../views/LoadingView';
import NotificationView from '../views/NotificationView';
import TestScreen from '../views/TestScreen';
import ChangePasswordView from '../views/ChangePasswordView';


const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen component={LoadingView} name='LoadingView'/>
      <Stack.Screen component={DrawerNavigate} name="MainDrawer" />
      <Stack.Screen component={App} name="IndexView" />
      <Stack.Screen component={HomeView} name="Home" />
      <Stack.Screen component={PromotionView} name="Promotion" />
      <Stack.Screen component={ProfessorView} name="Professor" />
      <Stack.Screen component={ShopView} name="Shop" />
      <Stack.Screen component={VideoView} name="Video" />
      <Stack.Screen component={DetailPromotion} name="DetailPromotion" />
      <Stack.Screen component={SubService} name="SubService" />
      <Stack.Screen component={GalleryView} name="GalleryView"/>
      <Stack.Screen component={ViewImage} name="ViewImage"/>
      <Stack.Screen component={MakeBookingView} name="MakeBookingView"/>
      <Stack.Screen component={AssignProfessorView} name="AssignProfessorView"/>
      <Stack.Screen component={ChooseServiceView} name="ChooseServiceView"/>
      <Stack.Screen component={BookingDetailView} name="BookingDetailView"/>
      <Stack.Screen component={EditBookingView} name="EditBookingView"/>
      <Stack.Screen component={LoginView} name="LoginView"/>
      <Stack.Screen component={CreateAccountView} name="CreateAccountView"/>
      <Stack.Screen component={CreatePasswordView} name="CreatePasswordView"/>
      <Stack.Screen component={ForgotPasswordView} name="ForgotPasswordView"/>
      <Stack.Screen component={ShopDetailView} name="ShopDetailView"/>
      <Stack.Screen component={ProfessionalDetailView} name="ProfessionalDetailView"/>
      <Stack.Screen component={RateView} name="RateView"/>
      <Stack.Screen component={LocationShopView} name="LocationShopView"/>
      <Stack.Screen component={OrderView} name="OrderView"/>
      <Stack.Screen component={ChooseMobileServiceView} name="ChooseMobileServiceView"/>
      <Stack.Screen component={OrderDetailView} name="OrderDetailView"/>
      <Stack.Screen component={FlowBookingView} name="FlowBookingView"/>
      <Stack.Screen component={SelectProfessorView} name="SelectProfessorView"/>
      <Stack.Screen component={ProfessorDetailView} name="ProfessorDetailView"/>
      <Stack.Screen component={VideoPlayerView} name="VideoPlayerView"/>
      <Stack.Screen component={MobileServiceView} name="MobileServiceView"/>
      <Stack.Screen component={ProfileView} name="ProfileView"/>
      <Stack.Screen component={FavouriteView} name="FavouriteView"/>
      <Stack.Screen component={MessageView} name="MessageView"/>
      <Stack.Screen component={TodayBookingAndOrderView} name="TodayBookingAndOrderView"/>
      <Stack.Screen component={BookingAndOrder} name="BookingAndOrder"/>
      <Stack.Screen component={HistoryBookingAndOrderView} name="HistoryBookingAndOrderView"/>
      <Stack.Screen component={PaymentView} name="Payment"/>
      <Stack.Screen component={MemberShipView} name='MemberShipView'/>
      <Stack.Screen component={SearchBarView} name='SearchBarView'/>
      <Stack.Screen component={SettingView} name='SettingView'/>
      <Stack.Screen component={HelpAndFeedBack} name='HelpAndFeedBack'/>
      <Stack.Screen component={PrivacyPolicyView} name='PrivacyPolicyView'/>
      <Stack.Screen component={DetailExploreView} name='DetailExploreView'/>
      <Stack.Screen component={NotificationView} name='NotificationView'/>
      <Stack.Screen component={TestScreen} name='TestScreen'/>
      <Stack.Screen component={ChangePasswordView} name='ChangePasswordView'/>
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});