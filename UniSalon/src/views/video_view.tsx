import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export const VideoView = () => {
    return (
        <SafeAreaView>
            <View style={styles.Appbar}>
                <Feather name="menu" size={24} style={{
                    color: 'white',
                    paddingRight: 125
                }} />
                <Text style={styles.TitleAppbar}>Videoe</Text>
            </View>
            <View style={styles.SearchBar}>
                <EvilIcons name="search" size={24} color="grey" />
                <Text style={{ paddingHorizontal: 10 }}>Search Video...</Text>
            </View>
            <View style={{ width: 'auto', height: 1, backgroundColor: '#ebebec' }}></View>
            <View style={styles.CardList}>
                <View style={{
                    width: 90,
                    height: 90,
                    backgroundColor: '#ebebec',
                    borderRadius: 10,
                }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>ធ្វើការកក់ទុកជាមុននៅរាល់ជាងនិងសេវាកម្ម</Text>
                    <Text>ដែលបងប្អូនពេញចិត្ត</Text>
                    <Text style={{ paddingVertical: 22 }}>17 Dec 2021 At 11:59 AM</Text>
                </View>
            </View>
            <View style={styles.CardList}>
                <View style={{
                    width: 90,
                    height: 90,
                    backgroundColor: '#ebebec',
                    borderRadius: 10,
                }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>ធ្វើការកក់ទុកជាមុននៅរាល់ជាងនិងសេវាកម្ម</Text>
                    <Text>ដែលបងប្អូនពេញចិត្ត</Text>
                    <Text style={{ paddingVertical: 22 }}>17 Dec 2021 At 11:59 AM</Text>
                </View>
            </View>
            <View style={styles.CardList}>
                <View style={{
                    width: 90,
                    height: 90,
                    backgroundColor: '#ebebec',
                    borderRadius: 10,
                }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>ធ្វើការកក់ទុកជាមុននៅរាល់ជាងនិងសេវាកម្ម</Text>
                    <Text>ដែលបងប្អូនពេញចិត្ត</Text>
                    <Text style={{ paddingVertical: 22 }}>17 Dec 2021 At 11:59 AM</Text>
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
    SearchBar: {
        width: 'auto',
        margin: 15,
        height: 45,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    CardList: {
        width: 'auto',
        height: 80,
        margin: 5,
        flexDirection: 'row',
        marginVertical: 15
    }
});