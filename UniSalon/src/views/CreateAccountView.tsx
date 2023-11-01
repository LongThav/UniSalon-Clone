import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const CreateAccountView = () => {
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
            <Text style={{ marginTop: '8%', textAlign: 'center', fontSize: 18, color: 'blue' }}>Enter Phone Number</Text>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.FormI}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18,}}>+885</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: 'grey', marginHorizontal: 10, marginTop: 3 }}></View>
                    <Text>Phone Number</Text>
                </View>
                <View style={styles.Submit}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Send</Text>
                </View>
            </View>
            <View style={styles.FormII}>
                <Text style={{ fontSize: 17, paddingLeft: 5 }}>Code</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: '12%', marginHorizontal: 15}}>
                <Text style={{fontSize: 16, color: 'blue'}}>By sign up, you agree to our</Text>
                <Text style={{fontSize: 16, color: 'blue', textDecorationLine: 'underline'}}>Term and Conditions.</Text>
            </View>
            <View style={styles.BtnLogin}>
                <Text style={styles.TxtLogin}>Next</Text>
            </View>
        </SafeAreaView>
    );
}

export default CreateAccountView

const styles = StyleSheet.create({
    FormI: {
        width: '67%',
        paddingVertical: 15,
        marginLeft: 15,
        flexDirection: 'row',
        marginTop: '13%',
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    Submit: {
        marginTop: '12.7%',
        padding: 15,
        height: 55,
        width: 100,
        backgroundColor: '#16247d',
        alignContent: 'center',
        alignItems: 'center'
    },
    FormII: {
        width: '92%',
        paddingVertical: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: '10%',
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    BtnLogin: {
        width: '92%',
        backgroundColor: '#16247d',
        paddingVertical: 15,
        marginHorizontal: 15,
        marginTop: '12%',
        alignContent: 'center',
        alignItems: 'center'
    },
    TxtLogin: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
})