import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../constant/FontSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

export const ChooseServiceView = () => {
  const navigation: any = useNavigation();
  const [Index, SetIndex] = useState<any>(null);

  const [data, setData] = useState<any>([
    {
      id: 1,
      num: '003',
      title: 'កាត់សក់នារី',
      price: '$ 10.00 Up',
      point: null,
      is_select: false,
    },
    {
      id: 2,
      num: '2',
      title: 'កាត់សក់បែបCEO',
      price: '$ 5.00 Up',
      point: '1 pt',
      is_select: false,
    },
    {
      id: 3,
      num: '011',
      title: 'កាត់ពុកមាត់បុរស',
      price: '$ 15.00 Up',
      point: null,
      is_select: false,
    },
    {
      id: 4,
      num: '008',
      title: 'កាត់ក្រចក់ដៃនិងជើងក្រចកជើងបុរស',
      price: '$ 10.00 Up',
      point: null,

      is_select: false,
    },
    {
      id: 5,
      num: '003',
      title: 'កាត់សក់នារី',
      price: '$ 10.00 Up',
      point: null,

      is_select: false,
    },
    {
      id: 6,
      num: '2',
      title: 'កាត់សក់បែបCEO',
      price: '$ 5.00 Up',
      point: '1 pt',
      is_select: false,
    },
    {
      id: 7,
      num: '011',
      title: 'កាត់ពុកមាត់បុរស',
      price: '$ 5.00 Up',
      point: '1 pt',
      is_select: false,
    },
    {
      id: 8,
      num: '008',
      title: 'កាត់ក្រចក់ដៃនិងជើងក្រចកជើងបុរស',
      price: '$ 5.00 Up',
      point: '1 pt',
      is_select: false,
    },
    {
      id: 9,
      num: '003',
      title: 'កាត់សក់នារី',
      price: '$ 5.00 Up',
      point: '1 pt',
      is_select: false,
    },
    {
      id: 10,
      num: '2',
      title: 'កាត់សក់បែបCEO',
      price: '$ 5.00 Up',
      point: '1 pt',
      is_select: false,
    },
    {
      id: 11,
      num: '011',
      title: 'កាត់ពុកមាត់បុរស',
      price: '$ 5.00 Up',
      point: '1 pt',
      is_select: false,
    },
    {
      id: 12,
      num: '008',
      title: 'កាត់ក្រចក់ដៃនិងជើងក្រចកជើងបុរស',
      price: '$ 10.00 Up',
      point: null,

      is_select: false,
    },
    {
      id: 13,
      num: '003',
      title: 'កាត់សក់នារី',
      price: '$ 10.00 Up',
      point: null,

      is_select: false,
    },
    {
      id: 14,
      num: '2',
      title: 'កាត់សក់បែបCEO',
      price: '$ 10.00 Up',
      point: null,

      is_select: false,
    },
    {
      id: 15,
      num: '011',
      title: 'កាត់ពុកមាត់បុរស',
      price: '$ 10.00 Up',
      point: null,

      is_select: false,
    },
    {
      id: 16,
      num: '008',
      title: 'កាត់ក្រចក់ដៃនិងជើងក្រចកជើងបុរស',
      price: '$ 10.00 Up',
      point: null,

      is_select: false,
    },
  ]);

  const [bottomBar, showBottomBar] = useState<any>(null);
  const [id, setId] = useState(0);
  const onSelect = (item: any) => {
    console.log(item);
    const dt = data.filter((e: any) => e.id == item.id);
    if (dt.length > 0) {
      dt[0].is_select = !dt[0].is_select;
      showBottomBar(dt[dt[0].is_select]);
    }
    setData([...data]);
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
          style={{position: 'absolute', left: 15, top: 15}}></AntDesign>
        <Text style={styles.TitleAppbar}>Choose Services</Text>
      </View>
      <View style={styles.BottomAppBar}>
        <Text
          style={{
            fontSize: FontSize.font14,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Select Service
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginBottom: height * 0.1}}
        data={data}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // if (Index === null) {
                //   SetIndex(index);
                // } else {
                //   SetIndex(0);
                // }
                // if (id === item.id) {
                //   console.log('true');
                //   console.log('Id condition true: ', item.id);
                //   console.log('check condition: ', id);
                //   setId(0);
                //   console.log('Id after close: ', id);
                // } else {
                //   console.log('false');
                //   console.log('Id: ', item.id);
                //   setId(item.id);
                //   console.log(id);
                // }
                onSelect(item);
              }}>
              <View style={styles.Card}>
                <View
                  style={{
                    width: 'auto',
                    height: 100,
                    backgroundColor: 'white',
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                    source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <Text
                  style={{
                    paddingVertical: 5,
                    fontSize: FontSize.font12,
                    color: '#16247d',
                  }}>
                  {item.num}
                </Text>
                <Text
                  style={{
                    fontSize: FontSize.font14,
                    fontWeight: 'bold',
                    color: '#16247d',
                  }}>
                  {item.title}
                </Text>
                <Text style={styles.txtPrice}>{item.price}</Text>
                {item.point === null ? null : (
                  <Text style={styles.txtPoint}>{item.point}</Text>
                )}
                {/* <View
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 25 / 2,
                    borderWidth: 2.5,
                    borderColor: 'white',
                    position: 'absolute',
                    right: 0,
                    marginRight: 5,
                    marginTop: 5,
                    backgroundColor: id === item.id ? 'grey' : 'white',
                  }}>
                </View> */}
                <MaterialCommunityIcons
                  style={{
                    borderColor: 'white',
                    position: 'absolute',
                    right: 0,
                    marginRight: 5,
                    marginTop: 5,
                  }}
                  size={24}
                  color={item.is_select ? 'white' : 'white'}
                  name={
                    item.is_select
                      ? 'checkbox-marked-circle'
                      : 'checkbox-blank-circle-outline'
                  }
                />
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.BottomNavigation}
        onPress={() => {
          if (bottomBar === true) {
            console.log("Can't push new screen");
          } else {
            navigation.push('BookingDetailView');
          }
        }}>
       <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Next
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  BottomAppBar: {
    marginTop: 0,
    paddingHorizontal: 15,
    width: 'auto',
    paddingVertical: 18,
    borderColor: '#edeff3',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  BottomNavigation: {
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    width: '93%',
    backgroundColor: '#16247d',
    paddingVertical: 12,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  Card: {
    width: width * 0.3,
    marginLeft: 10,
    paddingBottom: 15,
  },
  Card2: {
    width: 130,
    paddingHorizontal: 10,
    height: 200,
    borderRadius: 8,
  },
  txtPrice: {
    position: 'absolute',
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: '#509cdb',
    borderTopLeftRadius: 8,
    color: 'white',
    fontSize: FontSize.font10,
  },
  txtPoint: {
    position: 'absolute',
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: '#509cdb',
    top: 28,
    color: 'white',
    borderTopRightRadius: 8,
    fontSize: FontSize.font10,
  },
  Appbar: {
    width: 'auto',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  TitleAppbar: {
    fontSize: FontSize.font14,
    color: 'white',
    fontWeight: 'bold',
  },
});
