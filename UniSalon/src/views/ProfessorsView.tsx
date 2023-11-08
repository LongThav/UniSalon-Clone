import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, Text, View, StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const SideBarFilter = [
    {
        icons: 'search1',
        titile: 'All Professors'
    },
    {
        icons: '',
        title: 'Bleaching',
    },
    {
        icon: '',
        title: 'Blow Dry'
    },
    {
        icon: '',
        title: 'Cocktail Party MakeUp'
    },
    {
        icon: '',
        title: 'Edge Up'
    },
    {
        icon: '',
        title: 'Eyebrow Wax and Tint'
    }
];

export const ProfessorView = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.Appbar}>
                <Feather name="menu" size={24} style={{
                    color: 'white',
                }} />
                <Text style={styles.TitleAppbar}>All Professors</Text>
                <AntDesign name="search1" size={24} style={{
                    color: 'white',
                    // paddingRight: 125
                }} />
            </View>
            <View style={styles.Row}>
                <View style={styles.LeftBar}>
                    {
                        SideBarFilter.map((e, index)=>{
                            return <View>
                                <View ></View>
                            </View>
                        })
                    }
                </View>
                <View style={styles.RightBar}></View>
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
        paddingHorizontal: 16,
        justifyContent: 'space-between'
    },
    TitleAppbar: {
        fontSize: 18,
        color: 'white',
        paddingRight: 0
    },
    Row:{
        flexDirection: 'row',
    },
    LeftBar:{
        height: height,
        width: width * 0.3,
    },
    Circle:{
        width: 60,
        height: 60,
        backgroundColor: '#16247d',
        borderRadius: 60 / 1,
    },
    RightBar:{}
});