import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import DrawerPhone from './Drawer';


const Route = () => {
  return (
    <NavigationContainer>
      <MainStack />
      {/* <DrawerPhone /> */}
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});