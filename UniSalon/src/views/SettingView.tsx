import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontSize} from '../constant/FontSize';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Item = (leftIcon: any, title: any, rightIcon: any) => {
  return (
    <View style={styles.firstItem}>
      <View style={styles.rowLeft}>
        {/* <Ionicons color={'black'} size={25} name="notifications-outline" /> */}
        {leftIcon}
        <Text style={styles.txtNotification}>{title}</Text>
      </View>
      {/* <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={{marginTop: 16}}
    /> */}
      {rightIcon}
    </View>
  );
};

const SettingView = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
        <Text style={styles.SubText}>Settings</Text>
      </View>
      <ScrollView>
        <View style={styles.firstItem}>
          <View style={styles.rowLeft}>
            <Ionicons color={'black'} size={25} name="notifications-outline" />
            <Text style={styles.txtNotification}>Allow Notifications</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: 'blue'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginTop: 16}}
          />
        </View>
        <View
          style={{height: 1, backgroundColor: 'grey', width: 'auto'}}></View>
        <View style={styles.firstItem}>
          <View style={styles.rowLeft}>
            <Entypo color={'yellow'} size={25} name="star-outlined" />
            <Text style={styles.txtNotification}>Rate</Text>
          </View>
          <MaterialIcons
            size={25}
            name="arrow-forward-ios"
            style={{marginTop: 15, marginRight: 8}}
          />
        </View>
        <View
          style={{height: 1, backgroundColor: 'grey', width: 'auto'}}></View>
        <View style={styles.firstItem}>
          <View style={styles.rowLeft}>
            <AntDesign color={'black'} size={25} name="question" />
            <Text style={styles.txtNotification}>About App</Text>
          </View>
          <MaterialIcons
            size={25}
            name="arrow-forward-ios"
            style={{marginTop: 15, marginRight: 8}}
          />
        </View>
        <View
          style={{height: 1, backgroundColor: 'grey', width: 'auto'}}></View>
      </ScrollView>
    </View>
  );
};

export default SettingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  rowLeft: {
    marginLeft: 25,
    flexDirection: 'row',
    marginTop: 15,
  },
  txtNotification: {
    paddingLeft: 10,
    paddingTop: 3,
    fontSize: FontSize.font15,
    color: 'black',
  },
  firstItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginRight: 10,
  },
});
