import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { FontSize } from '../constant/FontSize';

const {width, height} = Dimensions.get('window');

const CmtList = [
  {
    name: 'ផាន​ ផន',
    title: 'Good brother',
    date: '25 Sep 2023 At 12:56 AM',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    name: 'Saroeun Tim',
    title: 'Good Bro',
    date: '26 Sep 2023 At 12:56 AM',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    name: 'ផាន​ ផន',
    title: 'Good brother',
    date: '25 Sep 2023 At 12:56 AM',
    img: require('../../assets/imgs/img1.jpg'),
  },
];

const RateView = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.AppBar}>
        <AntDesign
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}
          name="arrowleft"
          color={'white'}
          size={18}
          style={{position: 'absolute', left: 15, top: 15}}></AntDesign>
        <Text style={styles.TxtTitleAppBar}>មែន ស្តាយ's Reviews</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <Text style={styles.txtAverage}>Average</Text>
        <Text style={styles.txtAverageII}>⭐⭐⭐⭐⭐</Text>
        <View style={styles.frmtTxtInput}>
          <TextInput
            placeholder="Write your reviews here..."
            placeholderTextColor={'grey'}></TextInput>
        </View>
        <View style={styles.frmAddReview}>
          <Text style={{fontSize: 18, color: 'white'}}>Add Review</Text>
        </View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: 'grey',
            marginHorizontal: 15,
          }}></View>
        <Text
          style={{
            paddingLeft: 15,
            paddingTop: 15,
            fontSize: 18,
            color: 'blue',
          }}>
          Reviews and Rating
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}>
          <View style={{marginVertical: 15, marginTop: 35}}>
            <Text style={{fontSize: 18, color: 'blue', marginLeft: 35}}>
              4.3
            </Text>
            <Text style={{fontSize: 20}}>⭐⭐⭐⭐⭐</Text>
            <Text
              style={{
                fontSize: 18,
                color: 'blue',
                marginTop: 5,
                marginLeft: 20,
              }}>
              3 Reviews
            </Text>
          </View>
          <View style={{marginTop: 15}}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={20}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 20, color: 'black'}}>5</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 5,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 14,
                }}>
                <View
                  style={{
                    width: '70%',
                    height: 5,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 20, color: 'black'}}>2</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={20}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 20, color: 'black'}}>4</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 5,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 14,
                }}>
                <View
                  style={{
                    width: '0%',
                    height: 5,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 20, color: 'black'}}>0</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={20}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 20, color: 'black'}}>3</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 5,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 14,
                }}>
                <View
                  style={{
                    width: '30%',
                    height: 5,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 20, color: 'black'}}>1</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={20}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 20, color: 'black'}}>2</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 5,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 14,
                }}>
                <View
                  style={{
                    width: '0%',
                    height: 5,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 20, color: 'black'}}>0</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={20}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 20, color: 'black'}}>1</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 5,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 14,
                }}>
                <View
                  style={{
                    width: '0%',
                    height: 5,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 20, color: 'black'}}>0</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingTop: 15,
            color: 'grey',
            fontSize: 20,
          }}>
          3 Comments
        </Text>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: '#f2f2f2',
            marginTop: 5,
            marginHorizontal: 15,
          }}></View>
        {CmtList.map((e, index) => {
          return (
            <View key={index}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={e.img}
                  style={{
                    width: 50,
                    height: 50,
                    marginHorizontal: 15,
                    marginTop: 15,
                    borderRadius: 50 / 2,
                  }}></Image>
                <View>
                  <Text style={{marginTop: 15, fontSize: 18, color: 'blue'}}>
                    {e.name}
                  </Text>
                  <Text style={{color: 'yellow'}}>⭐⭐⭐⭐⭐</Text>
                </View>
              </View>
              <Text
                style={{paddingHorizontal: 15, paddingTop: 15, color: 'grey'}}>
                {e.date}
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingTop: 10,
                  fontSize: 18,
                  color: 'grey',
                }}>
                {e.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <AntDesign name="like2" color={'grey'} size={25}></AntDesign>
                <AntDesign
                  name="dislike2"
                  color={'grey'}
                  size={25}
                  style={{marginHorizontal: 30, marginTop: 5}}></AntDesign>
                <Octicons name="reply" color={'grey'} size={25}></Octicons>
              </View>
              <View
                style={{
                  width: 'auto',
                  height: 2,
                  backgroundColor: '#f2f2f2',
                  marginTop: 20,
                }}></View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RateView;

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  TxtTitleAppBar: {
    fontSize: FontSize.font14,
    color: 'white',
    fontWeight: 'bold',
  },
  txtAverage: {
    paddingLeft: 15,
    paddingTop: 15,
    fontSize: FontSize.font14,
    color: 'blue',
    fontWeight: 'bold',
  },
  txtAverageII: {
    paddingLeft: 15,
    paddingTop: 15,
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    letterSpacing: 10,
  },
  frmtTxtInput: {
    paddingHorizontal: 15,
    paddingTop: 0,
    borderWidth: 0.5,
    marginTop: 22,
    marginHorizontal: 15,
    borderRadius: 5,
    paddingBottom: 20,
  },
  frmAddReview: {
    width: 'auto',
    paddingVertical: 15,
    backgroundColor: 'green',
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'center',
  },
});
