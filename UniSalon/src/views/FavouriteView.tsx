import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FontSize} from '../constant/FontSize';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const Salons = () => (
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

const Pro = () => (
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

const Services = () => (
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
  first: Salons,
  second: Pro,
  third: Services,
});

const FavouriteView = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Salons'},
    {key: 'second', title: 'Professors'},
    {key: 'third', title: 'Services'},
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
        width: width / 3,
      }}
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: width / 3,
          }}>
          <Text
            style={{
              color: focused ? '#16247d' : 'black',
              margin: 8,
              fontSize: FontSize.font14,
              fontWeight: 'bold',
            }}>
            {route.title}
          </Text>
          <View
            style={
              route.title == 'Salons'
                ? styles.divider
                : route.title == 'Professors'
                ? styles.divider
                : null
            }></View>
        </View>
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
        <Text style={styles.SubText}>Favourite</Text>
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

export default FavouriteView;

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
