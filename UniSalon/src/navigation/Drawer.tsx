import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerView from '../views/DrawerView';


const Drawer = createDrawerNavigator();

const DrawerPhone = () => {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Drawer" component={DrawerView} />
        </Drawer.Navigator>
    )
}

export default DrawerPhone

const styles = StyleSheet.create({})