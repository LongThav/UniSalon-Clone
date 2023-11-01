import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from "@react-navigation/native";



export const HomeView = () => {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                style={styles.map}
                region={{
                    latitude: 11.5796,
                    longitude: 104.9250,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>
            </MapView>
            {/* <View style={{
                backgroundColor: 'red',
                width: 200,
                height: 200,
                position: 'absolute'
            }}>

            </View> */}
            <View style={styles.AppBar}>
                <TouchableOpacity activeOpacity={1} onPress={()=>{
                    navigation.openDrawer();
                }}>
                <Entypo name="menu" size={30}></Entypo>

                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, marginLeft: 15 }}>Search Salons...</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="search1" size={30}></AntDesign>
                    <View style={{ width: 30, height: 30, borderRadius: 30 / 2, backgroundColor: 'grey', marginHorizontal: 15 }}>
                        <Image style={{ flex: 1, width: 30, height: 30, borderRadius: 30 / 2 }} source={require('../../assets/imgs/cam_flag.png')}></Image>
                    </View>
                    <MaterialIcons name="notifications-none" size={30}></MaterialIcons>
                </View>
            </View>
            <ScrollView style={{position: 'absolute', marginTop: '20%'}}  showsHorizontalScrollIndicator={false} horizontal={true}>
                <TouchableOpacity style={styles.FilterAll}>
                    <Text style={{fontWeight: 'bold'}}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FilterII}>
                    <Text style={{fontWeight: 'bold'}}>Mobile Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FilterII}>
                    <Entypo name="shop" size={20}></Entypo>
                    <Text style={{fontWeight: 'bold', marginLeft:15}}>Mobile Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FilterII}>
                    <Fontisto name="scissors" size={20}></Fontisto>
                    <Text style={{fontWeight: 'bold', marginLeft:15}}>Professor</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AppBar: {
        width: '95%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute'
    },
    container: {
        // ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        // ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute'
    },
    FilterAll:{
        width: 60,
        height: 50,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        marginHorizontal: 12,
        borderRadius: 13
    },
    FilterII:{
        width: 'auto',
        height: 50,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        marginHorizontal: 12,
        borderRadius: 13,
        flexDirection:'row',
    }
})