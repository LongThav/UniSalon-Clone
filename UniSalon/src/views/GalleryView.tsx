import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const GalleryView = () => {
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
    ];
    const naviation: any = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.AppBar}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    naviation.goBack();

                }}>
                    <AntDesign name='arrowleft' color={'white'} size={28} style={{ marginRight: '7%' }}></AntDesign>
                </TouchableOpacity>
                <Text style={styles.SubText}>Gallery</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: '13%' }}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    console.log("Hello");
                    naviation.push('ViewImage')
                }}>
                    <View style={{ width: 130, height: 130, backgroundColor: 'grey', marginLeft: 6 }}>
                        <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                    </View>
                </TouchableOpacity>
                <View style={{ width: 130, height: 130, backgroundColor: 'grey', marginHorizontal: 5 }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ width: 130, height: 130, backgroundColor: 'grey' }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                <View style={{ width: 130, height: 130, backgroundColor: 'grey', marginLeft: 6 }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ width: 130, height: 130, backgroundColor: 'grey', marginHorizontal: 5 }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AppBar: {
        paddingHorizontal: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#16247d',
        position: 'absolute',
        alignItems: 'flex-start',
        paddingTop: '3%',
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    SubText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '30%'
    },
    gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3,
        marginVertical: 3,
        height: 100, // Set the item height
        borderColor: 'gray',
        borderWidth: 1,
    },
})