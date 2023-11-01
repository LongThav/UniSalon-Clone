import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Foundation from 'react-native-vector-icons/Foundation';

const CreatePasswordView = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                width: 100, height: 100, justifyContent: 'center',
                marginLeft: '38%', marginTop: '17%'
            }}>
                <Image style={{ flex: 1, width: 100, height: 100, borderRadius: 12 }} source={require('../../assets/imgs/logo.jpg')}></Image>
            </View>
            <Text style={{ marginTop: '8%', textAlign: 'center', fontSize: 18, color: 'grey' }}>Enter Your Password</Text>
            <View style={styles.FormII}>
                <Text style={{ fontSize: 16 }}>Password</Text>
                <Foundation name='eye' size={25}></Foundation>
            </View>
            <View style={styles.FormII}>
                <Text style={{ fontSize: 16 }}>Confirm Password</Text>
                <Foundation name='eye' size={25}></Foundation>
            </View>
            <View style={styles.BtnLogin}>
                <Text style={styles.TxtLogin}>Create Account</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
});

export default CreatePasswordView