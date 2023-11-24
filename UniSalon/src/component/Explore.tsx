import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import {FontSize} from '../constant/FontSize';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const ExploreItem = [
  {
    id: 1,
    icon: require('../../assets/imgs/bleaching.png'),
    title: 'Bleaching',
  },
  {
    id: 2,
    icon: require('../../assets/imgs/blow.png'),
    title: 'Blow Dry',
  },
  {
    id: 3,
    icon: require('../../assets/imgs/bleaching.png'),
    title: 'Cocktail Party MakeUp',
  },
  {
    id: 4,
    icon: require('../../assets/imgs/edgeup.png'),
    title: 'Edge Up',
  },
  {
    id: 5,
    icon: require('../../assets/imgs/eye-make-up.png'),
    title: 'Eyebrow Wax and Tint',
  },
  {
    id: 6,
    icon: require('../../assets/imgs/eyebrowii.png'),
    title: 'Eyebrow Wax and Tint',
  },
  {
    id: 7,
    icon: require('../../assets/imgs/bleaching.png'),
    title: 'Face Message',
  },
  {
    id: 8,
    icon: require('../../assets/imgs/more_option.png'),
    title: 'More',
  },
];

const Explore = () => {
  const [indexs, setIndex] = useState<any>(null);
  const navigation = useNavigation();
  const [bg, setBg] = useState(0);
  const BackgroundItem = (item: any) => {
    if (item === 0) {
      return '#b0e0e6';
    } else if (item === 1) {
      return '#cd853f';
    } else if (item === 2) {
      return '#98fb98';
    } else if (item === 3) {
      return '#663399';
    } else if (item === 4) {
      return '#6a5acd';
    } else if (item === 5) {
      return '#87ceeb';
    } else if (item === 6) {
      return '#40e0d0';
    } else {
      return 'white';
    }
  };
  // const toggleSwitch = () => {
  //   setColor(previousState => !previousState);
  //   console.log(colors);
  // };

  // const ChangeBg = (value:any)=>{

  // }
  console.log(indexs);
  return (
    <View style={styles.Container}>
      <FlatList
        scrollEnabled={false}
        numColumns={4}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={ExploreItem}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={{paddingTop: 0}}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.push('DetailExploreView', {
                    title: item.title
                  });
                  setIndex(index);
                }}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 45 / 2,
                    backgroundColor: BackgroundItem(index),
                    marginHorizontal: 8,
                  }}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      alignContent: 'center',
                      alignSelf: 'center',
                      marginTop: 10,
                    }}
                    source={item.icon}
                  />
                </View>
              </TouchableOpacity>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: FontSize.font13,
                  color: '#16247d',
                  textAlign: 'center',
                  width: 62,
                }}>
                {item.title}
              </Text>
              <View style={{height: 10}}></View>

              {/* <Text style={{}}>{item.title}</Text> */}
            </View>
          );
        }}></FlatList>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  Container: {
    // width: 'auto',
    // marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#eef1f6',
    marginBottom: 15,
    borderRadius: 7,
  },
  Circle: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: 'grey',
    marginHorizontal: 8,
  },
});
