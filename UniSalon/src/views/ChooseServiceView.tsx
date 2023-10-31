import { StyleSheet, Text, View, SafeAreaView, ScrollView, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


export const ChooseServiceView = () => {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.AppBar}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    navigation.goBack();
                }}>
                    <AntDesign name='arrowleft' color={'white'} size={28}></AntDesign>
                </TouchableOpacity>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold', paddingHorizontal: '25%' }}>Choose Services</Text>
            </View>
            <View style={styles.BottomAppBar}>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Select Service</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: '33%', paddingHorizontal: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.Card}>
                        <View style={{ width: '100%', height: 100, backgroundColor: "white", borderRadius: 10 }}>
                            <Image style={{ flex: 1, width: undefined, height: undefined, }} source={require('../../assets/imgs/img1.jpg')}></Image>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 18 }}>003</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កាត់សក់នារី</Text>
                    </View>
                    <View style={styles.Card2}>
                        <View style={{ width: '100%', height: 100, backgroundColor: "white" }}>
                            <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 18 }}>2</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កាត់សក់</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>បែបCEO</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={{ width: '100%', height: 100, backgroundColor: "white" }}>
                            <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 18 }}>003</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កោរពុកមាត់បុរស</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.Card}>
                        <View style={{ width: '100%', height: 100, backgroundColor: "white", borderRadius: 10 }}>
                            <Image style={{ flex: 1, width: undefined, height: undefined, }} source={require('../../assets/imgs/img1.jpg')}></Image>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 18 }}>003</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កាត់សក់នារី</Text>
                    </View>
                    <View style={styles.Card2}>
                        <View style={{ width: '100%', height: 100, backgroundColor: "white" }}>
                            <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 18 }}>2</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កាត់សក់</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>បែបCEO</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={{ width: '100%', height: 100, backgroundColor: "white" }}>
                            <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 18 }}>003</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កោរពុកមាត់បុរស</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.Card}>
                        <View style={{ width: '100%', height: 100, backgroundColor: "white", borderRadius: 10 }}>
                            <Image style={{ flex: 1, width: undefined, height: undefined, }} source={require('../../assets/imgs/img1.jpg')}></Image>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 18 }}>003</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កាត់សក់នារី</Text>
                    </View>
                    <View style={styles.Card2}>
                        <View style={{ width: '100%', height: 100, backgroundColor: "white" }}>
                            <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 18 }}>2</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កាត់សក់</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>បែបCEO</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={{ width: '100%', height: 100, backgroundColor: "white" }}>
                            <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 18 }}>003</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កោរពុកមាត់បុរស</Text>
                    </View>
                </View>

            </ScrollView>
            <TouchableOpacity activeOpacity={1} onPress={()=>{
                navigation.push('BookingDetailView')
            }}>
                <View style={styles.BottomNavigation}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Next</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    AppBar: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#16247d',
        flexDirection: 'row',
        paddingHorizontal: 15,
        position: 'absolute',
    },
    BottomAppBar: {
        marginTop: '14%',
        paddingHorizontal: 15,
        borderWidth: 2,
        width: '100%',
        paddingVertical: 18,
        borderColor: '#edeff3',
        position: 'absolute'
    },
    BottomNavigation: {
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        alignContent: 'center',
        width: '93%',
        backgroundColor: '#16247d',
        paddingVertical: 15,
        marginVertical: 15,
        marginHorizontal: 15
    },
    Card: {
        width: 130,
        height: 170,
    },
    Card2: {
        width: 130,
        paddingHorizontal: 10,
        height: 200,
        borderRadius: 8,
    }
})