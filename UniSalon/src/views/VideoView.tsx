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
  Dimensions,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {FontSize} from '../constant/FontSize';

const {width, height} = Dimensions.get('window');

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
    <View>
      <View style={styles.Appbar}>
        <Feather
          onPress={() => {
            navigation.openDrawer();
          }}
          name="menu"
          size={24}
          style={{
            color: 'white',
            position: 'absolute',
            left: 15,
          }}
        />
        <Text style={styles.TitleAppbar}>Videos</Text>
      </View>
      <View style={styles.SearchBar}>
        <EvilIcons name="search" size={20} color="grey" />
        <TextInput
          placeholder="Search Video..."
          placeholderTextColor={'grey'}
          style={{
            fontSize: FontSize.font13,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => {
                navigation.push('VideoPlayerView');
                console.log('Presssh');
              }}>
              <View key={index} style={styles.CardList}>
                <View
                  style={{
                    width: width * 0.27,
                    height: 75,
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
                  <Text
                    style={{
                      marginTop: 14,
                      color: 'grey',
                      fontSize: FontSize.font12,
                    }}>
                    17 Dec 2021 At 11:59 AM
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Appbar: {
    width: 'auto',
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingVertical: 12
  },
  TitleAppbar: {
    fontSize: FontSize.font15,
    color: 'white',
    fontWeight: 'bold',
  },
  SearchBar: {
    width: 'auto',
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    marginVertical: 18,
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
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  Text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: FontSize.font14,
    flex: 1,
  },
});
