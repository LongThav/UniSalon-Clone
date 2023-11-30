import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {FontSize} from '../constant/FontSize';

const {width, height} = Dimensions.get('window');

const SideBarFilter = [
  {
    id: 1,
    icon: require('../../assets/imgs/menu.png'),
    title: 'All Professors',
  },
  {
    id: 2,
    icon: require('../../assets/imgs/bleaching.png'),
    title: 'Bleaching',
  },
  {
    id: 3,
    icon: require('../../assets/imgs/blow.png'),
    title: 'Blow Dry',
  },
  {
    id: 4,
    icon: require('../../assets/imgs/bleaching.png'),
    title: 'Cocktail Party MakeUp',
  },
  {
    id: 5,
    icon: require('../../assets/imgs/edgeup.png'),
    title: 'Edge Up',
  },
  {
    id: 6,
    icon: require('../../assets/imgs/eyebrow.png'),
    title: 'Eyebrow Wax and Tint',
  },
  {
    id: 7,
    icon: require('../../assets/imgs/eyebrowii.png'),
    title: 'Eyebrow Wax and Tint',
  },
  {
    id: 8,
    icon: require('../../assets/imgs/bleaching.png'),
    title: 'Face Message',
  },
];

const PersonData = [
  {
    id: 1,
    name: 'Jhone Deo',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 2,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 3,
    name: 'Chornike Tim',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 4,
    name: 'Mr. Coder',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 5,
    name: 'ដៀប ដេត',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 6,
    name: 'Cat Lover',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 7,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 8,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 9,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 10,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 11,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 12,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 13,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 14,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 15,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 16,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 17,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 18,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 19,
    name: 'LongThav SiPav',
    img: require('../../assets/imgs/img1.jpg'),
  },
  {
    id: 20,
    name: 'So Thea',
    img: require('../../assets/imgs/img1.jpg'),
  },
];

export const ProfessorView = () => {
  const navigation: any = useNavigation();
  const [selectColor, setSelectColor] = useState<any>(0);
  const [bg, setBg] = useState(0);
  const BackgroundItem = () => {
    if (selectColor === 0) {
      return '#b0e0e6';
    } else if (selectColor === 1) {
      return '#cd853f';
    } else if (selectColor === 2) {
      return '#98fb98';
    } else if (selectColor === 3) {
      return '#663399';
    } else if (selectColor === 4) {
      return '#6a5acd';
    } else if (selectColor === 5) {
      return '#87ceeb';
    } else if (selectColor === 6) {
      return '#40e0d0';
    } else {
      return '#40e0d0';
    }
  };

  const SelectItem = (item: any) => {
    console.log('Data: ', item);
    setSelectColor(item);
  };

  const [title, setTittle] = useState('');

  const SetTitle = (title: any) => {
    console.log('Tittle: ', title);
  };

  const ItemSelecter = (index: any) => {
    if (index === 0) {
      return 'white';
    }
  };

  const ChangeBackground = (index: any) => {
    if (index === 0) {
      return '#16247d';
    } else if (index === 1) {
      return 'yellow';
    }
  };

  const [id, setId] = useState(1);
  const CheckId = (id: any) => {
    setId(id);
  };

  const BodyRightBar = () => {
    if (id === 1) {
      console.log('title: ', title);
      return (
        <FlatList
          style={{marginRight: 0, marginBottom: height * 0.17, flex: 1}}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={PersonData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  navigation.push('ProfessorDetailView', {
                    name: item.name,
                    img: item.img,
                  });
                }}>
                <View style={[styles.Card, styles.shadow]}>
                  <View style={styles.Profile}>
                    <Image
                      style={{
                        flex: 1,
                        height: 60,
                        width: 60,
                        borderRadius: 60 / 2,
                      }}
                      source={item.img}></Image>
                  </View>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#16247d',
                      marginTop: 10,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 10,
                      fontWeight: 'bold',
                      color: 'grey',
                      marginTop: 0,
                    }}>
                    ⭐⭐⭐⭐⭐ (5)
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 5,
                    }}>
                    <Entypo
                      size={16}
                      color={'#16247d'}
                      name="location-pin"></Entypo>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#16247d',
                        fontWeight: 'bold',
                      }}>
                      None
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: '#f1f1f1',
            flex: 1,
            // alignContent: 'center',
            // alignItems: 'center',
            paddingTop: '10%',
            // alignItems: 'center
            marginLeft: width * 0.285,
          }}>
          <Feather name="folder" size={60} color={'#aab8b6'}></Feather>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#aab8b6',
              paddingTop: '10%',
            }}>
            No Data
          </Text>
        </View>
      );
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.Appbar}>
        <Feather
          onPress={() => {
            navigation.openDrawer();
          }}
          name="menu"
          size={24}
          style={{
            color: 'white',
          }}
        />
        <Text style={styles.TitleAppbar}>All Professors</Text>
        <AntDesign
          onPress={() => {
            navigation.push('SearchBarView');
          }}
          name="search1"
          size={18}
          style={{
            color: 'white',
            // paddingRight: 125
          }}
        />
      </View>
      <View style={styles.Row}>
        <View style={styles.LeftBar}>
          <FlatList
            style={{marginBottom: height * 0.18}}
            showsVerticalScrollIndicator={false}
            data={SideBarFilter}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    SelectItem(index);
                    SetTitle(item.title);
                    CheckId(item.id);
                  }}>
                  <View
                    key={index}
                    style={{alignItems: 'center', marginTop: height * 0.03}}>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        alignContent: 'center',
                        paddingTop: 3,
                        alignItems: 'center',
                        borderRadius: 50 / 2,
                        // backgroundColor: ItemSelecter(selectColor === index)
                        backgroundColor:
                          selectColor === index ? '#16247d' : 'grey',
                        // backgroundColor: BackgroundItem()
                      }}>
                      <Image
                        style={{width: 40, height: 40}}
                        source={item.icon}
                        tintColor={ItemSelecter(index)}></Image>
                    </View>
                    <Text
                      style={{
                        marginTop: 15,
                        fontWeight: 'bold',
                        color: selectColor === index ? '#16247d' : 'black',
                        fontSize: FontSize.font11,
                        textAlign: 'center'
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}></FlatList>
        </View>
        <View style={styles.RightBar}>
          <BodyRightBar />
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
    justifyContent: 'space-between',
  },
  TitleAppbar: {
    fontSize: FontSize.font15,
    color: 'white',
    paddingRight: 0,
    fontWeight: 'bold',
  },
  Row: {
    flexDirection: 'row',
  },
  LeftBar: {
    height: height,
    width: width * 0.26,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  Circle: {
    width: 60,
    height: 60,
    backgroundColor: '#16247d',
    borderRadius: 60 / 1,
  },
  Column: {},
  RightBar: {
    width: 'auto',
    height: 'auto',
    paddingLeft: 7
    // backgroundColor: 'red'
  },
  Card: {
    width: width * 0.35,
    height: height * 0.2,
    backgroundColor: 'white',
    marginTop: 7,
    // marginRight: 7,
    borderRadius: 8,
    // marginLeft: 4,
    marginRight: 7,
  },
  Profile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#eef1f6',
    alignSelf: 'center',
    marginTop: 10,
  },
  shadow: {
    elevation: 2,
    shadowColor: '#52006A',
  }
});
