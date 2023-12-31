import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Image} from '@rneui/base';
import {TouchableOpacity} from 'react-native';
import {FontSize} from '../constant/FontSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: '1',
    price: '$ 10.00 Up',
    point: '2 pts',
    img: require('../../assets/imgs/make_up.png'),
    title: 'Nails',
  },
  {
    id: '2',
    price: '$ 10.00 Up',
    point: '2 pts',
    img: require('../../assets/imgs/make_up.png'),
    title: 'Haircut for men',
  },
  {
    id: '3',
    price: '$ 10.00 Up',
    point: '2 pts',
    img: require('../../assets/imgs/make_up.png'),
    title: 'Haircut for men',
  },
  {
    id: '4',
    price: '$ 10.00 Up',
    point: '2 pts',
    img: require('../../assets/imgs/make_up.png'),
    title: 'Haircut for kids',
  },
];

const ChooseMobileServiceView = () => {
  const navigation: any = useNavigation();
  const [state, setState] = useState(false);
  const [Index, SetValue] = useState<any>(null);
  const [icons, setIcons] = useState<any>(0);
  const [isStateTrue, setIsStateTrue] = useState(false);
  const toggleState = () => {
    setIsStateTrue(!isStateTrue);
  };
  const setBtnNext = (value: any) => {
    setState(!state);
    console.log('Check Condition: ', state);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Appbar}>
        <AntDesign
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}
          name="arrowleft"
          color={'white'}
          size={18}
          style={{position: 'absolute', left: 15, top: 17}}></AntDesign>
        <Text style={styles.TitleAppbar}>Choose Mobile Service</Text>
      </View>
      <Text style={styles.txtService}>Select Service</Text>
      <FlatList
        data={data}
        style={{paddingHorizontal: 15}}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={e => e.id}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                console.log('Index Ah thom: ', Index);
                console.log(index);
                if (Index === null) {
                  toggleState();
                  SetValue(index);
                  setIcons(index);
                  console.log('Index smer null: ', Index);
                } else {
                  SetValue(null);
                  console.log('Index elese null: ', Index);
                }
                console.log(Index);
              }}>
              <View>
                <View style={styles.Card}>
                  <Image
                    style={{width: 60, height: 60}}
                    source={item.img}></Image>
                  {Index == index ? (
                    <AntDesign
                      color={'grey'}
                      name="checkcircle"
                      size={22}
                      style={{
                        position: 'absolute',
                        right: 0,
                        marginTop: 5,
                        marginRight: 8,
                      }}></AntDesign>
                  ) : (
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 20 / 2,
                        borderWidth: 1,
                        borderColor: 'grey',
                        position: 'absolute',
                        right: 0,
                        marginTop: 6,
                        marginRight: 6,
                      }}></View>
                  )}
                  <Text
                    style={{
                      position: 'absolute',
                      left: 0,
                      fontSize: 10,
                      color: 'white',
                      padding: 5,
                      backgroundColor: '#509CDB',
                      borderBottomRightRadius: 5,
                      borderTopLeftRadius: 5,
                    }}>
                    {item.price}
                  </Text>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 30,
                      backgroundColor: '#509CDB',
                      padding: 2,
                      color: 'white',
                      borderBottomRightRadius: 5,
                      fontSize: 10,
                    }}>
                    {item.point}
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    // paddingLeft: 10,
                    textAlign: 'center',
                    fontSize: FontSize.font14,
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
      {Index != null ? (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.push('OrderDetailView');
          }}>
          <View style={styles.btnNext}>
            <Text
              style={{
                fontSize: FontSize.font14,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Next
            </Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default ChooseMobileServiceView;

const styles = StyleSheet.create({
  Appbar: {
    width: 'auto',
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingVertical: 15,
  },
  TitleAppbar: {
    fontSize: FontSize.font15,
    color: 'white',
  },
  txtService: {
    fontSize: FontSize.font14,
    paddingHorizontal: 15,
    paddingTop: 15,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white',
    paddingBottom: 20,
    borderWidth: 0.3,
  },
  Card: {
    width: width * 0.284,
    height: height * 0.14,
    backgroundColor: '#ebebec',
    marginVertical: 10,
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  btnNext: {
    paddingVertical: 13,
    backgroundColor: '#16247d',
    margin: 15,
    borderRadius: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
});
