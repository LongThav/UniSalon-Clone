import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {FontSize} from '../constant/FontSize';
import Feather from 'react-native-vector-icons/Feather';

const MemberShipView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={20}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Membership</Text>
      </View>
      <View style={styles.RibonReward}>
        <Ionicons
          name="ribbon-outline"
          size={45}
          style={{
            color: '#16247d',
            paddingRight: 15,
          }}
        />
        <View style={{flexDirection: 'column', flex: 1}}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 17.1,
              color: '#16247d',
              paddingVertical: 0,
            }}>
            Your current points of all salon shops 0 Point.
          </Text>
        </View>
      </View>
      <View style={styles.borderSearch}>
        <View style={styles.SearchBar}>
          <EvilIcons name="search" size={20} color="grey" />
          {/* <Text style={{ paddingHorizontal: 10 }}>Search Salons...</Text> */}
          <TextInput
            placeholder="Search Salons..."
            placeholderTextColor={'grey'}
            style={{
              fontSize: FontSize.font14,
              marginLeft: 0,
              margin: 0,
              padding: 0,
            }}></TextInput>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#f1f1f1',
          flex: 1,
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
          paddingTop: '10%',
        }}>
        <Feather name="folder" size={60} color={'#ebebec'}></Feather>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#ebebec',
            paddingTop: '2%',
          }}>
          No Data
        </Text>
      </View>
    </View>
  );
};

export default MemberShipView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AppBar: {
    paddingHorizontal: 10,
    width: '100%',
    // height: 50,
    paddingBottom: 10,
    backgroundColor: '#16247d',
    // position: 'absolute',
    paddingTop: '3%',
    flexDirection: 'row',
    verticalAlign: 'middle',
    justifyContent: 'center',
  },
  SubText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: '25%',
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: 10,
    marginLeft: 15,
  },
  RibonReward: {
    width: 'auto',
    height: 80,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  borderSearch: {
    borderWidth: 0.5,
    // paddingVertical: 5,
    // paddingHorizontal: 5,
    marginTop: 20,
  },
  SearchBar: {
    width: 'auto',
    marginVertical: 12,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
});
