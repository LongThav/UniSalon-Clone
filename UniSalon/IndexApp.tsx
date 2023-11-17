import React, { useEffect } from 'react';
import Route from './src/navigation/Route';
import "react-native-gesture-handler";

const MainApp = ()=>{
    // console.log("IN")
    // useEffect(() => {
    //     console.log("IN")
    //     // if (Platform.OS === 'android') SplashScreen.hide();
    //   }, []);
    return (
        <Route/>
    );
}

export default MainApp;