import React, { useEffect } from 'react';
import Route from './src/navigation/Route';
import "react-native-gesture-handler";
import BootSplash from 'react-native-bootsplash';
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)

const MainApp = ()=>{
    console.log("Hi App");
    useEffect(() => {
        const init = async () => {
          // …do multiple sync or async tasks
          console.log("Start Splash");
        };
    
        init().finally(async () => {
          await BootSplash.hide({fade: true});
          console.log('BootSplash has been hidden successfully');
        });
      }, []);
    return (
        <Route/>
    );
}

export default MainApp;