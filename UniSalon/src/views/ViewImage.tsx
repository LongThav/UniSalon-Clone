import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const ViewImage = () => {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
            <View style={styles.AppBar}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    navigation.goBack();
                }}>
                    <AntDesign name='arrowleft' color={'white'} size={28} style={{ marginRight: '7%' }}></AntDesign>
                </TouchableOpacity>
                <SimpleLineIcons style={{ marginLeft: '77%' }} name='cloud-download' color={'white'} size={30}></SimpleLineIcons>
            </View>
            <View style={{ marginTop: '12%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>1/1</Text>
            </View>
            <View style={{ width: '100%', height: '60%', alignItems: 'center', marginTop: '20%', backgroundColor: 'white' }}>
                <Image style={{ flex: 1, width: '100%', height: 100 }} source={require('../../assets/imgs/img1.jpg')}></Image>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AppBar: {
        paddingHorizontal: 10,
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        position: 'absolute',
        alignItems: 'flex-start',
        paddingTop: '3%',
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    SubText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '30%'
    },
});