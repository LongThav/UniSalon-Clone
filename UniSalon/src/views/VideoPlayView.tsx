import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';

const VideoPlayerView = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={30}></AntDesign>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
            paddingLeft: '30%',
          }}>
          Video Player
        </Text>
      </View>
      <View style={{height: 280, width: '100%'}}>
        <Video
          controls
          volume={20}
          source={require('../../assets/video/video.mp4')}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <View style={{marginLeft: 10, marginTop: 10}}>
        <Text style={{fontSize: 16, color: 'black'}}>
          ធ្វើការកក់ទុក្ខជាមុននៅរាល់ជាងនិងសេវាកម្មដែលបងប្អូនពេញចិត្ត
        </Text>
        <Text style={{marginTop: 5, fontSize: 15, color: 'grey'}}>
          10/11/2023 At 13.54 PM
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          borderRadius: 4,
        }}>
        <Image
          source={require('../../assets/imgs/img1.jpg')}
          style={{
            width: 110,
            height: 80,
            borderRadius: 5,
            marginLeft: 5,
          }}></Image>
        <View
          style={{
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              width: '100%',
            }}>
            តោះស្វែងយល់ពីរបៀបចុះឈ្មោះក្នុងការ
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            ប្រើប្រាស់ App Unisalon
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: 'grey',
              fontSize: 12,
            }}>
            17 Dec 2021 At 11:59 AM
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          borderRadius: 4,
        }}>
        <Image
          source={require('../../assets/imgs/img1.jpg')}
          style={{
            width: 110,
            height: 80,
            borderRadius: 5,
            marginLeft: 5,
          }}></Image>
        <View
          style={{
            marginLeft: 10,
          }}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            អរគុណប្អូន Sophorn Phou បានប្រើប្រាស់
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            សេវាកម្មនៅហាង Men_Style
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: 'grey',
              fontSize: 12,
            }}>
            17 Dec 2021 At 11:59 AM
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VideoPlayerView;

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#16247d',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
  },
});
