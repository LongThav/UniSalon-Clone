import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import TestView from '../views/TestView';

import App from '../../App';

const Drawer = createDrawerNavigator();

const DrawerNavigate = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerType: 'slide',
            headerTransparent: false,
            headerShown: false,
            drawerStyle: { width: '80%' },
        }}>
            <Drawer.Screen name="App" component={App} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigate;