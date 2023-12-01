import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontSize} from '../constant/FontSize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    title: 'Professor Sythan',
  },
  {
    id: 2,
    title: 'ជាង គង់(070933033)',
  },
  {
    id: 3,
    title: '(ជាង សុផា)',
  },
  {
    id: 4,
    title: 'Phan Phorn',
  },
  {
    id: 5,
    title: 'មាស សុមាវត្តី',
  },
  {
    id: 6,
    title: 'Malinda',
  },
  {
    id: 7,
    title: 'Professor Sythan',
  },
  {
    id: 8,
    title: 'ជាង គង់(070933033)',
  },
  {
    id: 9,
    title: '(ជាង សុផា)',
  },
  {
    id: 10,
    title: 'Phan Phorn',
  },
  {
    id: 1,
    title: 'មាស សុមាវត្តី',
  },
  {
    id: 12,
    title: 'Malinda',
  },
];

export const AssignProfessorView = () => {
  const navigation: any = useNavigation();
  const [isStateTrue, setIsStateTrue] = useState(false);
  const [icons, setIcons] = useState<any>(null);
  const [idPro, setIdPro] = useState<any>(null);

  // const checkTrueOrFalse = (value:any)=>{
  //   setIcons(!icons);
  // }

  const toggleState = () => {
    setIsStateTrue(!isStateTrue);
  };

  const [Index, SetIndex] = useState<any>(null);

  const txtBtn: String = '';

  // console.log("isStateTrue : ", isStateTrue)
  useEffect(() => {
    if (icons !== null) {
      SetIndex(null);
    }
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      {/* <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={18} style={{position: 'absolute'}}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Assign Professors (Optional)</Text>
      </View> */}
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
        <Text style={styles.TitleAppbar}>Assign Professors (Optional)</Text>
      </View>
      <View style={styles.BottomAppBar}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Select Professors
        </Text>
      </View>
      {/* <ScrollView style={{marginBottom: '10%'}}>
        <TouchableOpacity activeOpacity={1} onPress={toggleState}>
          <View style={styles.Role1}>
          
            <View style={{marginHorizontal: 10}}></View>
            <View
              style={{
                width: '47%',
                height: 200,
                borderWidth: 0.3,
                borderRadius: 10,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingTop: 15,
                  alignContent: 'space-between',
                  paddingLeft: 35,
                }}>
                <View
                  style={{
                    width: 65,
                    height: 65,
                    backgroundColor: 'yellow',
                    borderRadius: 65 / 2,
                    marginTop: 15,
                  }}>
                  <Image
                    style={{
                      width: 65,
                      height: 65,
                      flex: 1,
                      borderRadius: 65 / 2,
                    }}
                    source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    borderWidth: 2,
                    borderColor: 'grey',
                    marginLeft: 20,
                  }}></View>
              </View>
              <Text
                style={{
                  marginLeft: 28,
                  marginTop: 5,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Professor Sythan
              </Text>
              <Text
                style={{
                  marginLeft: 40,
                  marginTop: 5,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                ⭐⭐⭐⭐⭐
              </Text>
              <Text style={{marginTop: 8, marginLeft: 23}}>
                8 Credits / 2 Reviews
              </Text>
            </View>
            <View style={{marginHorizontal: 10}}></View>
          </View>
        </TouchableOpacity>
        
      </ScrollView> */}
      <FlatList
        style={{marginBottom: height * 0.1}}
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // if(Index === null){
                //     SetIndex(index);
                // }else{
                //     SetIndex(0);
                // }
                toggleState();
                console.log('press');
                if (icons === null) {
                  setIcons(index);
                  console.log(icons);
                } else {
                  setIcons(null);
                }
              }}>
              <View
                style={{
                  width: width * 0.46,
                  // height: height * 0.25,
                  borderWidth: 0.3,
                  borderRadius: 10,
                  flexDirection: 'column',
                  marginLeft: 10,
                  marginTop: 10,
                  backgroundColor: 'white',
                  paddingBottom: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    // paddingTop: 15,
                    alignContent: 'space-between',
                    // paddingLeft: 45,
                  }}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: 'yellow',
                      borderRadius: 60 / 2,
                      marginTop: 15,
                    }}>
                    <Image
                      style={{
                        width: 60,
                        height: 60,
                        flex: 1,
                        borderRadius: 60 / 2,
                      }}
                      source={require('../../assets/imgs/img1.jpg')}></Image>
                  </View>

                  {isStateTrue ? (
                    icons === index ? (
                      <AntDesign
                        color={'grey'}
                        name="checkcircle"
                        size={25}
                        style={{
                          backgroundColor: Index === index ? 'grey' : 'white',
                          position: 'absolute',
                          right: 0,
                          bottom: 35,
                          marginRight: 13,
                        }}></AntDesign>
                    ) : (
                      <Text></Text>
                    )
                  ) : (
                    <FontAwesome
                      color={'grey'}
                      name="circle-thin"
                      size={25}
                      style={{
                        backgroundColor: Index === index ? 'grey' : 'white',
                        position: 'absolute',
                        right: 0,
                        bottom: 35,
                        marginRight: 13,
                      }}></FontAwesome>
                  )}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 5,
                    fontSize: FontSize.font14,
                    fontWeight: 'bold',
                    color: '#16247d',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 5,
                    fontSize: FontSize.font12,
                    fontWeight: 'bold',
                  }}>
                  ⭐⭐⭐⭐⭐
                </Text>
                <Text
                  style={{
                    marginTop: 8,
                    // marginLeft: 23,
                    color: 'black',
                    fontSize: FontSize.font12,
                    textAlign: 'center',
                  }}>
                  8 Credits / 2 Reviews
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.BtnButton}
        onPress={() => {
          // console.log('IsState: ', isStateTrue);
          // if (icons === null) {
          //   console.log("Can't push new screen");
          // } else {
          //   console.log('Push screen');
          //   navigation.push('ChooseServiceView');
          // }
          // console.log('Index: ', Index);
          // console.log('icon: ', icons);

          console.log("Pressed");

          navigation.push('ChooseServiceView');
        }}>
        <Text
            style={{
              fontSize: FontSize.font14,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {icons !== null ? 'Next' : 'Skip'}
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    paddingHorizontal: 10,
    width: 'auto',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    // position: 'absolute',
    justifyContent: 'space-between',
    paddingTop: '3%',
    flexDirection: 'row',
    verticalAlign: 'middle',
  },
  SubText: {
    fontSize: FontSize.font14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  BottomAppBar: {
    width: 'auto',
    height: 55,
    borderWidth: 0.3,
    borderColor: '#ebebec',
    // position: 'absolute',
    alignContent: 'center',
    verticalAlign: 'middle',
    paddingLeft: 15,
    paddingTop: 15,
    backgroundColor: 'white',
  },
  BtnButton: {
    marginBottom: 15,
    bottom: 0,
    position: 'absolute',
    marginHorizontal: 15,
    width: '92.5%',
    paddingVertical: 15,
    backgroundColor: '#16247d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Role1: {
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'center',
    alignContent: 'space-around',
    marginHorizontal: 15,
  },
  Role2: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    alignContent: 'space-around',
    marginHorizontal: 15,
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
