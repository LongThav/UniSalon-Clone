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
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    title: 'Professor Sythan',
  },
  {
    id: 2,
    title: 'Professor Sythan',
  },
  {
    id: 3,
    title: 'Professor Sythan',
  },
  {
    id: 4,
    title: 'Professor Sythan',
  },
  {
    id: 5,
    title: 'Professor Sythan',
  },
  {
    id: 6,
    title: 'Professor Sythan',
  },
  {
    id: 7,
    title: 'Professor Sythan',
  },
  {
    id: 8,
    title: 'Professor Sythan',
  },
  {
    id: 9,
    title: 'Professor Sythan',
  },
];

export const AssignProfessorView = () => {
  const navigation: any = useNavigation();
  const [isStateTrue, setIsStateTrue] = useState(false);

  const toggleState = () => {
    setIsStateTrue(!isStateTrue);
  };

  const [Index, SetIndex] = useState<any>(null);

  // console.log("isStateTrue : ", isStateTrue)
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            console.log('Back');
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={28}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>Assign Professors (Optional)</Text>
      </View>
      <View style={styles.BottomAppBar}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
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
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                if(Index === null){
                    SetIndex(index);
                }else{
                    SetIndex(0);
                }
            }}>
              <View
                style={{
                  width: width * 0.46,
                  height: height * 0.25,
                  borderWidth: 0.3,
                  borderRadius: 10,
                  flexDirection: 'column',
                  marginLeft: 10,
                  marginTop: 10,
                  backgroundColor: 'white'
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
                      backgroundColor: Index === index ? 'grey' : 'white',
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
            </TouchableOpacity>
          );
        }}></FlatList>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          console.log('IsState: ', isStateTrue);
          if (isStateTrue == true) {
            console.log("Can't push new screen");
          } else {
            navigation.push('ChooseServiceView');
          }
        }}>
        <View style={styles.BtnButton}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            {Index ? 'Next' : 'Skip'}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    paddingHorizontal: 10,
    width: 'auto',
    height: 50,
    backgroundColor: '#16247d',
    // position: 'absolute',
    alignItems: 'flex-start',
    paddingTop: '3%',
    flexDirection: 'row',
    verticalAlign: 'middle',
  },
  SubText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: '10%',
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
});
