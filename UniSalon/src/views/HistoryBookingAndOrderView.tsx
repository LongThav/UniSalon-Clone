import {StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, Dimensions} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { FontSize } from '../constant/FontSize';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const Approved = () => (
  <View
    style={{
      backgroundColor: '#f1f1f1',
      flex: 1,
      justifyContent: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
      paddingTop: '10%',
    }}>
    <Feather name="folder" size={60} color={'#ebebec'}></Feather>
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ebebec',
        paddingTop: '2%',
      }}>
      No Data
    </Text>
  </View>
);

const Requeste = () => (
  <View
    style={{
      backgroundColor: '#f1f1f1',
      flex: 1,
      justifyContent: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
      paddingTop: '10%',
    }}>
    <Feather name="folder" size={60} color={'#ebebec'}></Feather>
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ebebec',
        paddingTop: '2%',
      }}>
      No Data
    </Text>
  </View>
);

const Rejeccted = () => (
  <View
    style={{
      backgroundColor: '#f1f1f1',
      flex: 1,
      justifyContent: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
      paddingTop: '10%',
    }}>
    <Feather name="folder" size={60} color={'#ebebec'}></Feather>
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ebebec',
        paddingTop: '2%',
      }}>
      No Data
    </Text>
  </View>
);

const Cancelled = () => (
  <View
    style={{
      backgroundColor: '#f1f1f1',
      flex: 1,
      justifyContent: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
      paddingTop: '10%',
    }}>
    <Feather name="folder" size={60} color={'#ebebec'}></Feather>
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ebebec',
        paddingTop: '2%',
      }}>
      No Data
    </Text>
  </View>
);

const renderScene = SceneMap({
  first: Approved,
  second: Requeste,
  third: Rejeccted,
  four: Cancelled
});

const HistoryBookingAndOrderView = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Salons'},
    {key: 'second', title: 'Professors'},
    {key: 'third', title: 'Services'},
    {key: 'four', title: 'Cancelled'}
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={{
        backgroundColor: '#f2f2f2',
      }}
      tabStyle={{
        width: width / 4,
        // backgroundColor: 'blue'
      }}
      // renderLabel={({props, }) => (
      //     <Text style={{ color: 'grey', margin: 8 }}>
      //       {props.route.title}
      //     </Text>
      //   )}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? '#16247d' : 'black',
            margin: 8,
            fontSize: FontSize.font10,
            fontWeight: 'bold',
          }}>
          {route.title}
        </Text>
      )}></TabBar>
  );
  return (
    <View style={styles.container}>
      <View style={styles.AppBar}>
      <TouchableOpacity
          style={styles.icon}
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'white'} size={20}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>History Booking & Order</Text>
      </View>
      <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          style={{
            backgroundColor: 'white',
          }}
          renderTabBar={renderTabBar}
        />
    </View>
  );
};

export default HistoryBookingAndOrderView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AppBar: {
    paddingHorizontal: 10,
    width: '100%',
    // height: 50,
    paddingBottom: 10,
    backgroundColor: '#16247d',
    // position: 'absolute',
    paddingTop: '3%',
    flexDirection: 'row',
    verticalAlign: 'middle',
    justifyContent: 'center',
  },
  SubText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: '25%',
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: 10,
    marginLeft: 15,
  },
  indicator: {
    backgroundColor: '#16247d',
    height: 2,
  },
});
