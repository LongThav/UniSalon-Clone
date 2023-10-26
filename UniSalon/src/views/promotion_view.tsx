import React from "react";
import { SafeAreaView, Text, View, useWindowDimensions, Image } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

export const Promotion = () => (
    <View style={styles.CardPromotion}>
        <View style={{
            width: 90,
            height: 90,
            backgroundColor: '#ebebec',
            borderRadius: 10,
        }}>
            {/* <Image source={require('assets/imgs/img1.jpg')}></Image> */}
        </View>
        <View style={{ paddingLeft: 10, alignItems: 'flex-start' }}>
            <Text style={{
                fontSize: 18,
                color: 'black',
                // marginTop: 10
            }}>កាត់សក់បុរស</Text>
            <Text>មែន​ ស្តាយ</Text>
            <Text>⭐⭐⭐⭐⭐ (3)</Text>
            <Text>កាត់សក់បុរស free កក់សក់ជូន</Text>

        </View>
    </View>
);

const Height = () => (
    <View style={{ flex: 1, justifyContent: "center", alignContent: 'center', alignItems: 'center' }}>
        <Text>Height</Text>
    </View>
);

const Reward = () => (
    <View style={{ flex: 1, justifyContent: "center", alignContent: 'center', alignItems: 'center' }}>
        <Text>Reward</Text>
    </View>
);

const renderScene = SceneMap({
    first: Promotion,
    // second: Height,
    third: Reward,
});

export const PromotionView = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Promotions' },
        // { key: 'second', title: '|' },
        { key: 'third', title: 'Rewards' },
    ]);
    return (
        <SafeAreaView>
            <View style={styles.Appbar}>
                <Feather name="menu" size={24} style={{
                    color: 'white',
                    paddingRight: 125
                }} />
                <Text style={styles.TitleAppbar}>Promotions</Text>
            </View>
            <View style={styles.RibonReward}>
                <Ionicons name="ribbon-outline" size={45} style={{
                    color: '#16247d',
                    paddingRight: 15,
                }} />
                <View style={{

                }}>
                    <Text style={{
                        fontSize: 18,
                        color: '#16247d',
                        paddingVertical: 7
                    }}>Your current points of all salon shops.</Text>
                    <Text style={{
                        fontSize: 18,
                        color: '#16247d'
                    }}>0 Point</Text>
                </View>
            </View>
            <View style={{ width: 'auto', height: 5, backgroundColor: '#ebebec', marginVertical: 15 }}>
            </View>

            <View style={styles.BottomTab}>
                <Text style={{
                    fontSize: 18,
                }}>Promotions</Text>
                <View style={{ height: 20, backgroundColor: 'grey', width: 1, marginHorizontal: 50 }}></View>
                <Text style={{ fontSize: 18 }}>Rewards</Text>
            </View>
            <View style={{ width: 'auto', backgroundColor: '#ebebec', height: 1 }}></View>
            <View >
            </View>
            {/* <View style={styles.TabBar}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    style={{
                        backgroundColor: 'white',
                    }}
                />
            </View> */}
            <View style={styles.CardPromotion}>
                <View style={{
                    width: 90,
                    height: 90,
                    backgroundColor: '#ebebec',
                    borderRadius: 10,
                }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingLeft: 10, alignItems: 'flex-start' }}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        // marginTop: 10
                    }}>កាត់សក់បុរស</Text>
                    <Text>មែន​ ស្តាយ</Text>
                    <Text>⭐⭐⭐⭐⭐ (3)</Text>
                    <Text>កាត់សក់បុរស free កក់សក់ជូន</Text>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Appbar: {
        width: "auto",
        height: 60,
        backgroundColor: '#16247d',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    TitleAppbar: {
        fontSize: 18,
        color: 'white',
    },
    RibonReward: {
        width: 'auto',
        height: 80,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    BottomTab: {
        width: 'auto',
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignContent: 'center',
    },

    TabBar: {
        width: 'auto',
        height: 800,
    },
    CardPromotion: {
        width: 'auto',
        height: 100,
        borderWidth: 3,
        borderColor: '#ebebec',
        margin: 15,
        borderRadius: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        flexDirection: 'row'
    }
});