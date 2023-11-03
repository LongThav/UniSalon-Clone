import React, {useCallback, useMemo, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const {width, height} = Dimensions.get('window');

export const HomeView = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        style={styles.map}
        region={{
          latitude: 11.5796,
          longitude: 104.925,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
      {/* <View style={{
                backgroundColor: 'red',
                width: 200,
                height: 200,
                position: 'absolute'
            }}>

            </View> */}
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Entypo name="menu" size={30} color={'grey'}></Entypo>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          {/* <Text style={{ fontSize: 20, marginLeft: 15 }}>Search Salons...</Text> */}
          <TextInput
            placeholder="Search Salons..."
            placeholderTextColor={'grey'}
            style={{
              fontSize: 20,
              marginLeft: 0,
              margin: 0,
              padding: 0,
            }}></TextInput>
        </View>
        <View style={{flexDirection: 'row'}}>
          <AntDesign color={'grey'} name="search1" size={30}></AntDesign>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
              backgroundColor: 'grey',
              marginHorizontal: 15,
            }}>
            <Image
              style={{flex: 1, width: 30, height: 30, borderRadius: 30 / 2}}
              source={require('../../assets/imgs/cam_flag.png')}></Image>
          </View>
          <MaterialIcons
            name="notifications-none"
            size={30}
            color={'grey'}></MaterialIcons>
        </View>
      </View>
      <ScrollView
        style={{position: 'absolute', marginTop: width * 0.2}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <TouchableOpacity activeOpacity={1} style={styles.FilterAll}>
          <Text style={{fontWeight: 'bold', color: 'grey'}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.FilterII}>
          <Text style={{fontWeight: 'bold', color: 'grey'}}>
            Mobile Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.FilterII}>
          <Entypo name="shop" size={20} color={'grey'}></Entypo>
          <Text style={{fontWeight: 'bold', color: 'grey', marginLeft: 15}}>
            Mobile Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.FilterII}>
          <Fontisto name="scissors" size={20} color={'grey'}></Fontisto>
          <Text style={{fontWeight: 'bold', color: 'grey', marginLeft: 15}}>
            Professor
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <MaterialCommunityIcons
        size={25}
        color={'blue'}
        style={styles.IconStyle}
        name="refresh"></MaterialCommunityIcons>
      <FontAwesome6
        size={25}
        color={'black'}
        style={styles.IconStyleII}
        name="location-crosshairs"></FontAwesome6>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    width: '95%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
  },
  FilterAll: {
    width: 60,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 13,
  },
  FilterII: {
    width: 'auto',
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 13,
    flexDirection: 'row',
  },
  IconStyle: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    bottom: '50%',
    right: 0,
    marginRight: 15,
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
    bottom: '43%',
    right: 0,
    marginRight: 15,
  },
});
