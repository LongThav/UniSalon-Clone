import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../constant/FontSize';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';
import {blues} from '../constant/color';

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
    <Feather name="folder" size={60} color={'grey'}></Feather>
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
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
    <Feather name="folder" size={60} color={'grey'}></Feather>
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
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
    <Feather name="folder" size={60} color={'grey'}></Feather>
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
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
    <Feather name="folder" size={60} color={'grey'}></Feather>
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
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
  four: Cancelled,
});

const HistoryBookingAndOrderView = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Salons'},
    {key: 'second', title: 'Professors'},
    {key: 'third', title: 'Services'},
    {key: 'four', title: 'Cancelled'},
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
      }}
      renderLabel={({route, focused, color}) => (
        <Text
            style={{
              color: focused ? blues : 'black',
              margin: 8,
              fontSize: 10,
              fontWeight: 'bold',
            }}>
            {route.title}
          </Text>
      )}></TabBar>
  );
  return (
    <View style={styles.container}>
      <View style={styles.AppBar}>      
          <AntDesign onPress={()=>{
            navigation.goBack();

          }} name="arrowleft" color={'white'} size={25}></AntDesign>
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
    paddingBottom: 10,
    backgroundColor: '#16247d',
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
  divider: {
    width: 1.8,
    height: '100%',
    backgroundColor: 'gray',
    position: 'absolute',
    right: 0,
  },
});
