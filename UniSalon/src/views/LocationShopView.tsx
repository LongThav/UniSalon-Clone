import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const {width, height} = Dimensions.get('window');

const LocationShopView = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.AppBar}>
        <AntDesign
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}
          name="arrowleft"
          color={'white'}
          size={28}
          style={{position: 'absolute', left: 15, top: 15}}></AntDesign>
        <Text style={styles.TxtTitleAppBar}>ABC007's Location</Text>
      </View>
      <View style={styles.Box}>
        <Text style={{fontSize: 20, color: '#509cdb'}}>
          Destination Location (11621.43km)
        </Text>
      </View>
      <FontAwesome6
        size={25}
        color={'black'}
        style={styles.IconStyleII}
        name="location-crosshairs"></FontAwesome6>
    </SafeAreaView>
  );
};

export default LocationShopView;

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  TxtTitleAppBar: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  Box: {
    width: 'auto',
    height: height * 0.15,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.05,
  },
  IconStyleII: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    bottom: '10%',
    right: 0,
    marginBottom: 20,
    marginRight: 18,
  },
});
