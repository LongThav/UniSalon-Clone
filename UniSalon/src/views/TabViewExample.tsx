// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';

// const FirstRoute = () => (
//   <View style={styles.scene}>
//     <Text>First Tab</Text>
//   </View>
// );

// const SecondRoute = () => (
//   <View style={styles.scene}>
//     <Text>Second Tab</Text>
//   </View>
// );

// const ThirdRoute = () => (
//   <View style={styles.scene}>
//     <Text>Third Tab</Text>
//   </View>
// );

// const renderTabBar = (props:any) => {
//   const inputRange = props.navigationState.routes.map((_, i) => i);

//   return (
//     <View style={styles.tabBar}>
//       {props.navigationState.routes.map((route:any, index:any) => {
//         const opacity = props.position.interpolate({
//           inputRange,
//           outputRange: inputRange.map((i:any) => (i === index ? 1 : 0.5)),
//         });

//         return (
//           <View key={route.key} style={styles.tabItem}>
//             <Text style={{ opacity }}>{route.title}</Text>
//             {index < props.navigationState.routes.length - 1 && (
//               <View style={styles.divider} />
//             )}
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// const initialLayout = { width: 360 };

// const TabViewExample = () => {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     { key: 'first', title: 'First' },
//     { key: 'second', title: 'Second' },
//     { key: 'third', title: 'Third' },
//   ]);

//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//     third: ThirdRoute,
//   });

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       renderTabBar={renderTabBar}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   scene: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   tabBar: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10,
//   },
//   divider: {
//     width: 1,
//     height: '100%',
//     backgroundColor: 'gray',
//   },
// });

// export default TabViewExample;
