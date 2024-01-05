import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SearchBarView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={1}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="arrowleft" color={'grey'} size={25}></AntDesign>
          </TouchableOpacity>
          <TextInput
            placeholderTextColor={'grey'}
            placeholder="Search Salons..."
            style={{color: 'black', marginLeft: 8,  width: '83%',}}
            ></TextInput>
        </View>
        <FontAwesome
          style={{
            top: 10,
            marginRight: 15,
            margin: 0,
            padding: 0
          }}
          size={20}
          color={'grey'}
          name="search"
        />
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

export default SearchBarView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    alignContent: 'center',
    top: 10,
    right: 5,
    marginLeft: 10,
  },
  search: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
