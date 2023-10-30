import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexView } from '../views/index_view';
import { HomeView } from '../views/home_view';
import { PromotionView } from '../views/promotion_view';
import { ProfessorView } from '../views/professors';
import { ShopView } from '../views/shop_view';
import { VideoView } from '../views/video_view';
import { DetailPromotion } from '../views/detail_promotion_view';
import { SubService } from '../views/subservice';
import {GalleryView} from '../views/GalleryView';
import {ViewImage} from '../views/ViewImage';
import { MakeBookingView } from '../views/MakeBookingView';
import {AssignProfessorView} from '../views/AssignProfessorView';


import App from '../../App';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
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
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});