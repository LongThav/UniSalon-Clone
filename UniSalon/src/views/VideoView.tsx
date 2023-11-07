import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    title: 'ធ្វើការកក់ទុកជាមុននៅរាល់ជាងនិងសេវាកម្មដែល បងប្អូនពេញចិត្ត',
  },
  {
    id: 2,
    title:
      'តោះស្វែងយល់ពីរបៀបចុះឈ្មោះរបៀបចុះឈ្មោះក្នុងការប្រើប្រាស់ App UniSalon',
  },
  {
    id: 3,
    title: 'ធ្វើការកក់ទុកជាមុននៅរាល់ជាងនិងសេវាកម្មដែល បងប្អូនពេញចិត្ត',
  },
];

export const VideoView = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <View style={styles.Appbar}>
          <Feather
            name="menu"
            size={24}
            style={{
              color: 'white',
              position: 'absolute',
              left: 15,
            }}
          />
          <Text style={styles.TitleAppbar}>Videoe</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.SearchBar}>
        <EvilIcons name="search" size={30} color="grey" />
        {/* <Text style={{ paddingHorizontal: 10 }}>Search Video...</Text> */}
        <TextInput
          placeholder="Search Video..."
          placeholderTextColor={'grey'}
          style={{
            fontSize: 20,
            marginLeft: 8,
            margin: 0,
            padding: 0,
          }}></TextInput>
      </View>
      <View
        style={{width: 'auto', height: 1, backgroundColor: '#ebebec'}}></View>
      <View
        style={{
          width: 'auto',
          height: 1,
          backgroundColor: '#ebebec',
          marginBottom: 4,
        }}></View>
      <ScrollView>
        {data.map((e, index) => {
          return (
            <View style={styles.CardList}>
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: '#ebebec',
                  borderRadius: 10,
                }}>
                <Image
                  style={{
                    flex: 1,
                    width: undefined,
                    height: undefined,
                    borderRadius: 10,
                  }}
                  source={require('../../assets/imgs/img1.jpg')}></Image>
              </View>
              <View style={{paddingHorizontal: 10, flex: 1}}>
                <Text numberOfLines={3} style={styles.Text}>
                  {e.title}
                </Text>
                <Text style={{paddingVertical: 22, color: 'grey'}}>
                  17 Dec 2021 At 11:59 AM
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Appbar: {
    width: 'auto',
    height: 60,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  TitleAppbar: {
    fontSize: 18,
    color: 'white',
  },
  SearchBar: {
    width: 'auto',
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 15,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  CardList: {
    width: 'auto',
    margin: 5,
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 15,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  Text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },
});
