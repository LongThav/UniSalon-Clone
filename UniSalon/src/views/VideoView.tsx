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
        <EvilIcons name="search" size={24} color="grey" />
        {/* <Text style={{ paddingHorizontal: 10 }}>Search Video...</Text> */}
        <TextInput
          placeholder="Search Video..."
          placeholderTextColor={'grey'}
          style={{
            fontSize: 20,
            marginLeft: 0,
            margin: 0,
            padding: 0,
          }}></TextInput>
      </View>
      <View
        style={{width: 'auto', height: 1, backgroundColor: '#ebebec'}}></View>
      <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
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
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.Text}>
              ធ្វើការកក់ទុកជាមុននៅរាល់ជាងនិងសេវាកម្ម
            </Text>
            <Text style={styles.Text}>ដែលបងប្អូនពេញចិត្ត</Text>
            <Text style={{paddingVertical: 22, color: 'grey'}}>
              17 Dec 2021 At 11:59 AM
            </Text>
          </View>
        </View>
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
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.Text}>
              ធ្វើការកក់ទុកជាមុននៅរាល់ជាងនិងសេវាកម្ម
            </Text>
            <Text style={styles.Text}>ដែលបងប្អូនពេញចិត្ត</Text>
            <Text style={{paddingVertical: 22, color: 'grey'}}>
              17 Dec 2021 At 11:59 AM
            </Text>
          </View>
        </View>
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
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.Text}>
              ធ្វើការកក់ទុកជាមុននៅរាល់ជាងនិងសេវាកម្ម
            </Text>
            <Text style={styles.Text}>ដែលបងប្អូនពេញចិត្ត</Text>
            <Text style={{paddingVertical: 22, color: 'grey'}}>
              17 Dec 2021 At 11:59 AM
            </Text>
          </View>
        </View>
      </View>
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
    margin: 15,
    height: 45,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  CardList: {
    width: 'auto',
    margin: 5,
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  Text: {
    color: 'grey',
  },
});
