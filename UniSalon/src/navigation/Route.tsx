import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const Route = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#16247d'}></StatusBar>
      <MainStack />
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
