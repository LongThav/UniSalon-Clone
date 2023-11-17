import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const HelpAndFeedBack = () => {
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
        <Text style={styles.SubText}>Help & Feedback</Text>
      </View>
      <View style={styles.item}>
          <Text style={styles.txtTitle}>How to register account in app user</Text>
          <MaterialIcons size={25} name='arrow-forward-ios' style={{marginTop: 15}}/>
        </View>
        <View style={{height: 0.4, backgroundColor: 'grey', width: 'auto'}}></View>
    </View>
  );
};

export default HelpAndFeedBack;

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
  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 15
  },
  txtTitle:{
    fontSize: 18,
    width: width * 0.7,
    color: 'black'
  }
});
