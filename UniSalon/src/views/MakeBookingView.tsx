import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const MakeBookingView = () => {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.AppBar}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    navigation.goBack();

                }}>
                    <AntDesign name='arrowleft' color={'white'} size={28}></AntDesign>
                </TouchableOpacity>
                <Text style={styles.SubText}>Make A BOOKING</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: '0%' }}>
                    <Text style={{ paddingHorizontal: 15, paddingVertical: 10, color: 'black', fontSize: 18, fontWeight: 'bold' }}>Shop Information</Text>
                </View>
                <View style={styles.Form1}>
                    <Ionicons name='business-outline' color={'grey'} size={25}></Ionicons>
                    <View style={{ width: 1, height: '100%', backgroundColor: 'grey', marginHorizontal: 15 }}></View>
                    <Text style={{ fontSize: 18, color: 'grey' }}>មែន ស្តាយ</Text>
                </View>
                <View style={styles.Form1}>
                    <Ionicons name='phone-portrait-outline' color={'grey'} size={25}></Ionicons>
                    <View style={{ width: 1, height: '100%', backgroundColor: 'grey', marginHorizontal: 15 }}></View>
                    <Text style={{ fontSize: 18, color: 'grey'}}>715636246</Text>
                </View>
                <View style={styles.Form1}>
                    <EvilIcons name='location' color={'grey'} size={25} style={{ marginTop: 5 }}></EvilIcons>
                    <View style={{ width: 1, height: '100%', backgroundColor: 'grey', marginHorizontal: 15 }}></View>
                    <Text style={{ fontSize: 18, color: 'grey' }}>103 St 512, Phnom Penh, Cambodia</Text>
                </View>
                <View style={{ marginTop: '5%' }}>
                    <Text style={{ paddingHorizontal: 15, paddingVertical: 10, color: 'black', fontSize: 18, fontWeight: 'bold' }}>Booking Information</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.SelectDay}>
                        <AntDesign name='clockcircleo' color={'grey'} size={20}></AntDesign>
                        <View style={{ width: 1, height: '100%', backgroundColor: 'grey', marginHorizontal: 15 }}></View>
                        <Text style={{ fontSize: 15, color: 'grey' }}>Mon,30 Oct 2023</Text>
                    </View>
                    <View style={styles.SelectHour}>
                        <AntDesign name='clockcircleo' color={'grey'} size={20}></AntDesign>
                        <View style={{ width: 1, height: '100%', backgroundColor: 'grey', marginHorizontal: 15 }}></View>
                        <Text style={{ fontSize: 15, color: 'grey' }}>11:17</Text>
                    </View>
                </View>
                <View style={styles.Form2}>
                    <AntDesign name='infocirlceo' color={'grey'} size={25}></AntDesign>
                    <View style={{ width: 1, height: '40%', backgroundColor: 'grey', marginHorizontal: 15 }}></View>
                    <Text style={{ fontSize: 18, color:'grey' }}>Booking Note...(Optional)</Text>
                    {/* <TextInput></TextInput> */}
                </View>
                <TouchableOpacity onPress={() => {
                    console.log("Push next screen");
                    navigation.push('AssignProfessorView')
                }}>
                    <View style={styles.BtnNext}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Next</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AppBar: {
        paddingHorizontal: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#16247d',
        // position: 'absolute',
        alignItems: 'flex-start',
        paddingTop: '3%',
        flexDirection: 'row',
        verticalAlign: 'middle'
    },
    SubText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '25%'
    },
    Form1: {
        marginTop: '3.5%',
        width: '93%',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        paddingVertical: 15,
        backgroundColor: '#eef2fa',
        verticalAlign: 'middle',
        borderRadius: 4
    },
    SelectDay: {
        width: '50%',
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        verticalAlign: 'middle',
        backgroundColor: '#eef2fa',
        marginHorizontal: 15,
        borderRadius: 8
    },
    SelectHour: {
        width: '40%',
        paddingVertical: 15,
        flexDirection: 'row',
        verticalAlign: 'middle',
        backgroundColor: '#eef2fa',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Form2: {
        marginTop: '3.5%',
        width: '93%',
        height: 100,
        paddingRight: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        paddingVertical: 15,
        backgroundColor: '#eef2fa',
        verticalAlign: 'middle',
        borderRadius: 4,
        paddingLeft: 10
    },
    BtnNext: {
        width: '92%',
        marginTop: '15%',
        backgroundColor: '#16247d',
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
    },
    TextStyle:{
        color: 'grey'
    }
});