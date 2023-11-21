import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { FontSize } from '../constant/FontSize';

const {width, height} = Dimensions.get('window');

const CreateAccountView = () => {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AntDesign onPress={() => {
                navigation.goBack();
            }} name='arrowleft' color={'grey'} size={28} style={{ paddingLeft: 15, paddingTop: 10 }}></AntDesign>
            <View style={{
                width: 100, height: 100, 
               alignSelf: 'center'
            }}>
                <Image style={{ flex: 1, width: 100, height: 100, borderRadius: 12 }} source={require('../../assets/imgs/logo.jpg')}></Image>
            </View>
            <Text style={{ marginTop: height  * 0.05, textAlign: 'center', fontSize: 18, color: 'blue' }}>Enter Phone Number</Text>
            {/* <View style={{ flexDirection: 'row', }}>
                <View style={styles.FormI}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, }}>+885</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: 'grey', marginHorizontal: 10, marginTop: 3 }}></View>
                    <Text>Phone Number</Text>
                 <TextInput placeholder='+885 | Phone Number' placeholderTextColor={'black'} style={{padding: 0,  color: 'black'}} ></TextInput>

                </View>
                <View style={styles.Submit}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Send</Text>
                </View>
            </View> */}
             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: height * 0.08 }}>
                <View style={styles.FormI}>
                    {/* <Text style={{ fontWeight: 'bold', fontSize: 18, }}>+885</Text>
                    <View style={{ height: 15, width: 1, backgroundColor: 'grey', marginHorizontal: 10, marginTop: 3 }}></View>
                    <Text>Phone Number</Text> */}
                    <TextInput placeholder='+885 | Phone Number' placeholderTextColor={'black'} style={{padding: 0,  color: 'black'}} ></TextInput>
                </View>
                <View style={styles.Submit}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Send</Text>
                </View>
            </View>
            {/* <View style={styles.FormII}>
                <Text style={{ fontSize: 17, paddingLeft: 5 }}>Code</Text>
                <TextInput placeholder='Code' placeholderTextColor={'black'} style={{padding: 0, color: 'black'}}></TextInput>
            </View> */}
            <View style={styles.FormII}>
                {/* <Text style={{ fontSize: 17, paddingLeft: 5 }}>Code</Text> */}
                <TextInput placeholder='Code' placeholderTextColor={'black'} style={{padding: 0, color: 'grey'}}></TextInput>
            </View>
            <View style={{ flexDirection: 'row', marginTop: height * 0.05, marginHorizontal: 15, width: width * 0.8,  }}>
                <Text style={{ fontSize: FontSize.font15, color: 'blue' }}>By sign up, you agree to our</Text>
                <Text style={{ fontSize: FontSize.font15, color: 'blue', textDecorationLine: 'underline' }}>Term and Conditions.</Text>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={() => {
                navigation.push('CreatePasswordView');
            }}>
                <View style={styles.BtnLogin}>
                    <Text style={styles.TxtLogin}>Next</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default CreateAccountView

const styles = StyleSheet.create({
    FormI: {
        width: width * 0.71,
        paddingVertical: 15,
        // marginLeft: 15,
        flexDirection: 'row',
        // marginTop: '14%',
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    Submit: {
        // marginTop: '13.7%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        // height: 55,
        // width: 100,
        backgroundColor: '#16247d',
        alignContent: 'center',
        alignItems: 'center'
    },
    FormII: {
        paddingVertical: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 25,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    BtnLogin: {
        backgroundColor: '#16247d',
        paddingVertical: 15,
        marginHorizontal: 15,
        marginTop: height * 0.08,
        alignContent: 'center',
        alignItems: 'center'
    },
    TxtLogin: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
})