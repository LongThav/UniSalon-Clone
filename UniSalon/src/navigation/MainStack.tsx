import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { IndexView } from '../views/index_view';
import { HomeView } from '../views/home_view';
import { PromotionView } from '../views/promotion_view';
import { ProfessorView } from '../views/professors';
import { ShopView } from '../views/shop_view';
import { VideoView } from '../views/video_view';
import { detailPromotion } from '../views/detail_promotion_view';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen component={IndexView} name="IndexView" />
      <Stack.Screen component={HomeView} name="Home" />
      <Stack.Screen component={PromotionView} name="Promotion" />
      <Stack.Screen component={ProfessorView} name="Professor" />
      <Stack.Screen component={ShopView} name="Shop" />
      <Stack.Screen component={VideoView} name="Video" />
      <Stack.Screen component={detailPromotion} name="detailPromotion" />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});