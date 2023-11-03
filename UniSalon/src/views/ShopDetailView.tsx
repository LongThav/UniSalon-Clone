import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ShopDetailView = () => {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.AppBar}>
                <AntDesign onPress={() => {
                    console.log("Back");
                    navigation.goBack();
                }} name='arrowleft' color={'white'} size={28}></AntDesign>
                <Text style={styles.TxtTitleAppBar}>Shop Information</Text>
                <AntDesign name='hearto' color={'white'} size={28}></AntDesign>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: '2%' }}>
                <View style={styles.Cover}>
                    <Image style={{ flex: 1, height: undefined, width: undefined }} source={require('../../assets/imgs/cover.jpg')}></Image>
                </View>
                <View style={styles.Profile}>
                    <Image style={{ flex: 1, width: 100, height: 100, borderRadius: 100 / 2 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>មែន​ ស្តាយ</Text>
                <Text style={{ textAlign: 'center', marginTop: 0, fontSize: 17, fontWeight: 'bold' }}>⭐⭐⭐⭐⭐</Text>
                <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 17, fontWeight: 'bold', textDecorationLine: 'underline', marginBottom: 10 }}>3 Reviews</Text>
                <View style={{ width: 'auto', height: 0.5, backgroundColor: 'grey' }}></View>
                <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 15 }}>មែន​ ស្តាយ</Text>
                <View style={styles.FrmName}>
                    <Ionicons name='business-outline' size={25} color={'black'}></Ionicons>
                    <Text style={{ fontSize: 18, color: 'black', paddingLeft: 10 }}>មែន ស្តាយ</Text>
                </View>
                <View style={styles.FrmName}>
                    <Ionicons name='mail-outline' size={25} color={'black'}></Ionicons>
                    <Text style={{ fontSize: 18, color: 'black', paddingLeft: 10 }}>longthavsipav@gmail.com</Text>
                </View>
                <View style={styles.BoxText}>
                    <AntDesign name='infocirlceo' size={25}></AntDesign>
                    <View style={{ paddingHorizontal: 15 }}>
                        <Text style={{ fontSize: 18, color: 'black' }}>បម្រើសេវាកម្មជូនអស់លោក​ លោកស្រីឲកាន់តែ</Text>
                        <Text style={{ fontSize: 18, color: 'black' }}>មានប្រសិទ្ទភាព គុណភាព ទំនុកចិត្ត និងក្ដី</Text>
                        <Text style={{ fontSize: 18, color: 'black' }}>ស្រលាញ់ សូមអញ្ជើញមកទទូលយកនូវសេវាកម្មទៅតាមតម្រូវការរបស់អតិថិជនមាននៅហាងMen Style Barbar Shop Academy</Text>
                    </View>
                </View>
                <View style={styles.FrmName}>
                    <Ionicons name='call-outline' size={25} color={'black'}></Ionicons>
                </View>
                <View style={styles.FrmName}>
                    <Ionicons name='phone-portrait-outline' size={25} color={'black'}></Ionicons>
                    <Text style={{ fontSize: 18, color: 'black', paddingLeft: 10 }}>715636246</Text>
                </View>
                <View style={styles.FrmName}>
                    <MaterialIcons name='date-range' size={25} color={'black'}></MaterialIcons>
                    <Text style={{ fontSize: 18, color: 'black', paddingLeft: 10 }}>Mon, Tue, Wed, Thu, Fri, Sat, Sun</Text>
                </View>
                <View style={styles.FrmName}>
                    <Octicons name='clock' size={25} color={'black'}></Octicons>
                    <Text style={{ fontSize: 18, color: 'black', paddingLeft: 10 }}>08:00 - 19:00</Text>
                </View>
                <Text style={{textAlign: 'center', margin: 15}}>More do tomorrow...</Text>
            </ScrollView>
            <View style={styles.BottomBar}>
                <View style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: "#1da1f2", alignItems: 'center', alignSelf: 'center', justifyContent: 'center', }}>
                    <Ionicons name='mail-outline' size={25} color={'white'}></Ionicons>
                </View>
                <View style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: "#ff743a", alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginHorizontal: 15 }}>
                    <Ionicons name='call-outline' size={25} color={'white'}></Ionicons>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#16247d', width: '71%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>MAKE A BOOKING</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ShopDetailView

const styles = StyleSheet.create({
    AppBar: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#16247d',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    TxtTitleAppBar: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    Cover: {
        width: '100%',
        height: 150,
        backgroundColor: 'grey',
    },
    Profile: {
        // position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: 'green',
        alignSelf: 'center',
        // marginTop: '2%'m
        marginTop: -50

    },
    FrmName: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#edeff3",
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 15,
        flexDirection: 'row'
    },
    BoxText: {
        padding: 15,
        backgroundColor: '#edeff3',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 15,
    },
    BottomBar: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderWidth: 0.2,
        flexDirection: 'row',
    }
})