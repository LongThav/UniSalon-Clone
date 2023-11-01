import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation';
import { useNavigation } from '@react-navigation/native';

const LoginView = () => {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AntDesign onPress={() => {
                navigation.goBack();
            }} name='arrowleft' color={'grey'} size={28} style={{ paddingLeft: 15, paddingTop: 10 }}></AntDesign>
            <View style={{
                width: 100, height: 100, justifyContent: 'center',
                marginLeft: '38%', marginTop: '17%'
            }}>
                <Image style={{ flex: 1, width: 100, height: 100, borderRadius: 12 }} source={require('../../assets/imgs/logo.jpg')}></Image>
            </View>
            <View style={styles.FormI}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>+885</Text>
                <View style={{ height: 15, width: 1, backgroundColor: 'grey', marginHorizontal: 10, marginTop: 3 }}></View>
                <Text>Phone Number</Text>
            </View>
            <View style={styles.FormII}>
                <Text style={{ fontSize: 16 }}>Password</Text>
                <Foundation name='eye' size={25}></Foundation>
            </View>
            <View style={styles.BtnLogin}>
                <Text style={styles.TxtLogin}>Login</Text>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={()=>{
                navigation.push('ForgotPasswordView');
            }}>
            <Text style={{ textAlign: 'center', marginTop: '8%', color: 'blue', fontSize: 15, }}>Forgot Password</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginTop: '7%' }}>
                <View style={{ width: '47%', height: 1, backgroundColor: 'grey', marginTop: 10 }}></View>
                <Text style={{}}>Or</Text>
                <View style={{ width: '47%', height: 1, backgroundColor: 'grey', marginTop: 10 }}></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 15, marginTop: '8%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: '8%', backgroundColor: 'white', width: '46%', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10 }}>
                    <View style={{ width: 30, height: 30 }}>
                        <Image style={{ flex: 1, width: 30, height: 30, borderRadius: 3 }} source={require('../../assets/imgs/fb_logo.png')}></Image>
                    </View>
                    <Text style={{ color: 'blue', fontSize: 13, marginLeft: 10, }}>Log in with Facebook</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: '8%', backgroundColor: 'white', width: '44.5%', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, }}>
                    <View style={{ width: 30, height: 30 }}>
                        <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/google.png')}></Image>
                    </View>
                    <Text style={{ color: 'blue', fontSize: 15, marginLeft: 10 }}>Log in with Gmail</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '8%' }}>
                <Text style={{ marginTop: 3 }}>Don't have an account?</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    navigation.push('CreateAccountView')
                }}>
                    <Text style={{ color: 'blue', paddingLeft: 10, fontSize: 18, }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginView

const styles = StyleSheet.create({
    FormI: {
        width: '92%',
        paddingVertical: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: '13%',
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    FormII: {
        width: '92%',
        paddingVertical: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: '8%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    BtnLogin: {
        width: '92%',
        backgroundColor: '#16247d',
        paddingVertical: 15,
        marginHorizontal: 15,
        marginTop: '8%',
        alignContent: 'center',
        alignItems: 'center'
    },
    TxtLogin: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
})