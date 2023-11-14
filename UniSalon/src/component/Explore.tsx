import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {FontSize} from '../constant/FontSize';

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
    icon: require('../../assets/imgs/eye.png'),
    title: 'Eyebrow Wax and Tint',
  },
  {
    id: 6,
    icon: require('../../assets/imgs/bleaching.png'),
    title: 'Edge Up',
  },
  {
    id: 7,
    icon: require('../../assets/imgs/bleaching.png'),
    title: 'Eyebrow Wax and Tint',
  },
  {
    id: 8,
    icon: require('../../assets/imgs/bleaching.png'),
    title: 'More',
  },
];

const Explore = () => {
  return (
    <View style={styles.Container}>
      <FlatList
        scrollEnabled={false}
        numColumns={4}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={ExploreItem}
        renderItem={({item, index}) => {
          return (
            <View style={{paddingTop: 0}}>
              <View style={styles.Circle}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    alignContent: 'center',
                    alignSelf: 'center',
                    marginTop: 6,
                  }}
                  source={item.icon}
                />
              </View>
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
    marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#eef1f6',
    marginVertical: 15,
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
