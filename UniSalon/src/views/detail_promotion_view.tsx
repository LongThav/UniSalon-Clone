import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const detailPromotion = () => {
    return (
        <SafeAreaView>
            <View style={styles.AppBar}>
                <AntDesign name='arrowleft' color={'white'} size={30}></AntDesign>
                <Text style={{
                    fontSize: 17, fontWeight: 'bold', color: 'white', paddingLeft: '30%'
                }}>កាត់សក់បុរស</Text>
            </View>
            <View style={styles.CardView}>
                <View style={styles.Image}>
                    <Image style={{
                        width: undefined, height: undefined, flex: 1, borderRadius: 8
                    }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginTop: 8, marginBottom: 4, fontWeight: 'bold', color: 'black', fontSize: 18 }}>កាត់សក់បុរស</Text>
                        <Text style={{ color: 'red', fontWeight: 'bold', paddingTop: 10, marginLeft: 100 }}>$ 5.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', color: '#16247d', paddingBottom: 4 }}>មែន ស្តាយ</Text>
                        <Text style={{ marginLeft: 137, fontWeight: 'bold' }}>Up</Text>
                    </View>
                    <Text>⭐⭐⭐⭐⭐(3)</Text>
                    <Text style={{
                        paddingVertical: 4
                    }}>ហាងយើងខ្ញុំផ្ដល់ជូននៅទាំងគុណភាណ និងអនាម័យ</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 15, paddingRight: 20 }}>
                            <FontAwesome6 name="location-dot" style={{ paddingRight: 5, marginTop: 4 }} color={'#16247d'}></FontAwesome6>
                            <Text style={{ color: '#16247d', fontWeight: 'bold' }}>None</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                            <FontAwesome6 name="clock" style={{ paddingRight: 5, marginTop: 4 }} color={'#16247d'}></FontAwesome6>
                            <Text style={{ color: '#16247d', fontWeight: 'bold' }}>Opening</Text>
                            <TouchableOpacity onPress={() => {
                                console.log("onPressed!!!");
                            }}>
                                <AntDesign name='hearto' style={{ paddingTop: 2, paddingLeft: 70 }} size={20} color={'pink'}></AntDesign>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AppBar: {
        width: 'auto',
        height: '20%',
        backgroundColor: '#16247d',
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    CardView: {
        marginHorizontal: 7,
        width: 'auto',
        height: 150,
        backgroundColor: 'white',
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#f1f1f1',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Image: {
        width: 130,
        height: 130,
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
    }
});