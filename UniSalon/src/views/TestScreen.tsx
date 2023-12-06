import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TestScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contianer}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={28}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Testing View</Text>
        <AntDesign
          name="hearto"
          size={25}
          color={'white'}
          style={{marginRight: 0}}></AntDesign>
      </View>
      <ScrollView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text>Name: </Text>
            <Text>LongThav SiPav</Text>
          </View>
        </View>
      </ScrollView>    
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  contianer: {
    flex: 1,
  },
  AppBar: {
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    backgroundColor: '#16247d',
    paddingTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SubText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
