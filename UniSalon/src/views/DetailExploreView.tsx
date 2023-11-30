import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../constant/FontSize';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const data = [
  {
    id: '1',
    name: 'ម៉ាស្សារមុខ',
    subtitle: 'ព្រំុ សំណាង',
    price: '$10.00',
    num_rating: '0',
    img: require('../../assets/imgs/massar.jpg'),
    up: null,
  },
  {
    id: '2',
    name: 'បកមុន',
    subtitle: 'ព្រំុ សំណាង',
    price: '$4.00',
    num_rating: '0',
    img: require('../../assets/imgs/borkmon.jpg'),
    up: null,
  },
  {
    id: '3',
    name: 'HairColor',
    subtitle: 'FadeByAj',
    price: '$25.00',
    num_rating: '0',
    img: require('../../assets/imgs/haircolor.jpg'),
    up: 'up',
  },
  {
    id: '4',
    name: 'លាបសក់',
    subtitle: '007 haircut',
    price: '$12.00',
    num_rating: '1',
    img: require('../../assets/imgs/labsork.jpg'),
    up: 'up',
  },
];

const DetailExploreView = (props: any) => {
  const navigation:any = useNavigation();
  const {title} = props.route.params;
  console.log('Title: ', title);
  return (
    <View style={styles.container}>
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
        <Text style={styles.TitleAppbar}>{title}</Text>
      </View>
      <ScrollView>
        {data.map((data, index) => {
          return (
            <TouchableOpacity activeOpacity={1} key={index} onPress={()=>{
              navigation.push('SubService');
              // setIndex(index);
            }}>
            <View key={index} style={[styles.cards, styles.shadow]}>
              <View style={styles.imgtitle}>
                <Image style={styles.img} source={data.img} />
                <View style={styles.columns}>
                  <Text style={styles.txtName}>{data.name}</Text>
                  <Text style={styles.txtSubTitle}>{data.subtitle}</Text>
                  <Text style={styles.txtRating}>
                    ⭐⭐⭐⭐⭐({data.num_rating})
                  </Text>
                  <View style={{flexDirection: 'row', paddingVertical: 15}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingRight: 20,
                      }}>
                      <FontAwesome6
                        size={12}
                        name="location-dot"
                        style={{paddingRight: 5, marginTop: 2.8}}
                        color={'#16247d'}></FontAwesome6>
                      <Text
                        style={{
                          color: '#16247d',
                          fontWeight: 'bold',
                          fontSize: FontSize.font12,
                        }}>
                        None
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                      <FontAwesome6
                        size={12}
                        name="clock"
                        style={{paddingRight: 5, marginTop: 2.8}}
                        color={'#16247d'}></FontAwesome6>
                      <Text
                        style={{
                          color: '#16247d',
                          fontWeight: 'bold',
                          fontSize: FontSize.font12,
                        }}>
                        Opening
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.rightColumn}>
                <Text style={styles.txtPrice}>{data.price}</Text>
                {data.up === null ? null : (
                  <Text style={styles.txtUp}>{data.up}</Text>
                )}
              </View>
              <AntDesign
                style={styles.icon}
                size={18}
                color={'#ff8b8b'}
                name="hearto"
              />
            </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DetailExploreView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  cards: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 12,
    marginHorizontal: 15,
    borderRadius: 4,
    // borderWidth: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgtitle: {
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  columns: {
    marginLeft: 10,
  },
  txtName: {
    fontSize: FontSize.font16,
    color: 'black',
  },
  txtSubTitle: {
    fontSize: FontSize.font14,
    color: 'black',
    paddingVertical: 3,
  },
  rightColumn: {
    flexDirection: 'column',
  },
  txtPrice: {
    fontSize: FontSize.font14,
    color: 'red',
    fontWeight: '400',
  },
  txtUp: {
    textAlign: 'right',
    fontSize: FontSize.font14,
    color: 'red',
    fontWeight: '400',
  },
  txtRating: {
    fontSize: FontSize.font14,
    color: 'grey',
    fontWeight: '400',
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 12,
    marginRight: 10,
  },
  shadow: {
    elevation: 1.4,
    shadowColor: '#52006A',
  }
});
