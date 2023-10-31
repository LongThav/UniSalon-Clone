import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, useWindowDimensions, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
const { width } = Dimensions.get('window')

const MenData = [
    {
        'id': '1',
        'title': 'កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...',
        'price': '$10.00',
        'booking': 'Booking',
        'img': '../../assets/imgs/img1.jpg',
    },
    {
        'id': '1',
        'title': 'កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...',
        'price': '$10.00',
        'booking': 'Booking',
        'img': '../../assets/imgs/img1.jpg',
    },
    {
        'id': '1',
        'title': 'កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...',
        'price': '$10.00',
        'booking': 'Booking',
        'img': '../../assets/imgs/img1.jpg',
    },
];

const Kid = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#f1f1f1' }}>

            <View style={styles.CardListMen}>
                <View style={{ width: '30%', height: '100%' }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...</Text>
                    <Text style={{ fontSize: 18, marginTop: 8 }}>ពិន្ទុ:0.5 ដង.ហ្វ្រីរកក់សក់.ធ្វើម៉ូតសក់</Text>
                    <Text style={{ fontSize: 18, marginTop: 5 }}>ដោយឥតគិតថ្លៃ😍</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ marginRight: '32%', marginTop: 20, fontSize: 18, color: 'red', fontWeight: 'bold' }}>$6.00</Text>
                        <View style={{ paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#16247d', borderRadius: 8 }}>
                            <Text style={{ fontSize: 18, color: '#16247d', fontWeight: 'bold' }}>Booking</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.CardListMen}>
                <View style={{ width: '30%', height: '100%' }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>Popular Hairstyles</Text>
                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                        <Text style={{ marginRight: '32%', marginTop: 20, fontSize: 18, color: 'red', fontWeight: 'bold' }}>$5.0</Text>
                        <View style={{ paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#16247d', borderRadius: 8, marginLeft: 12 }}>
                            <Text style={{ fontSize: 18, color: '#16247d', fontWeight: 'bold' }}>Booking</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const Women = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#f1f1f1' }}>
            <View style={styles.CardListMen}>
                <View style={{ width: '30%', height: '100%' }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កាត់ សក់​.ម៉ូត.លូរហ្វេត.ហាយហ្វេត.</Text>
                    <Text style={{ fontSize: 18, marginTop: 8 }}>0.5</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ marginRight: '32%', marginTop: 20, fontSize: 18, color: 'red', fontWeight: 'bold' }}>$10.00</Text>
                        <View style={{ paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#16247d', borderRadius: 8 }}>
                            <Text style={{ fontSize: 18, color: '#16247d', fontWeight: 'bold' }}>Booking</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.CardListMen}>
                <View style={{ width: '30%', height: '100%' }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>Popular Hairstyles</Text>
                    <Text style={{ fontSize: 18, marginTop: 8 }}>Popular Hairstyles</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ marginRight: '32%', marginTop: 20, fontSize: 18, color: 'red', fontWeight: 'bold' }}>$10.00</Text>
                        <View style={{ paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#16247d', borderRadius: 8 }}>
                            <Text style={{ fontSize: 18, color: '#16247d', fontWeight: 'bold' }}>Booking</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.CardListMen}>
                <View style={{ width: '30%', height: '100%' }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>Popular Hairstyles</Text>
                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                        <Text style={{ marginRight: '32%', marginTop: 20, fontSize: 18, color: 'red', fontWeight: 'bold' }}>$10.00</Text>
                        <View style={{ paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#16247d', borderRadius: 8 }}>
                            <Text style={{ fontSize: 18, color: '#16247d', fontWeight: 'bold' }}>Booking</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const Men = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#f1f1f1' }}>
            <View style={styles.CardListMen}>
                <View style={{ width: '30%', height: '100%' }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>Hight Fan Hairstyles</Text>
                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                        <Text style={{ marginRight: '32%', marginTop: 20, fontSize: 18, color: 'red', fontWeight: 'bold' }}>$10.00</Text>
                        <View style={{ paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#16247d', borderRadius: 8 }}>
                            <Text style={{ fontSize: 18, color: '#16247d', fontWeight: 'bold' }}>Booking</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.CardListMen}>
                <View style={{ width: '30%', height: '100%' }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>Classic</Text>
                    <Text style={{ fontSize: 15, marginTop: 8 }}>Classic Model លក្ខណះសុភាពរាបសារ</Text>
                    <Text>សាកសមគ្រប់វិស័យ</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ marginRight: '32%', marginTop: 20, fontSize: 18, color: 'red', fontWeight: 'bold' }}>$10.00</Text>
                        <View style={{ paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#16247d', borderRadius: 8 }}>
                            <Text style={{ fontSize: 18, color: '#16247d', fontWeight: 'bold' }}>Booking</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.CardListMen}>
                <View style={{ width: '30%', height: '100%' }}>
                    <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('../../assets/imgs/img1.jpg')}></Image>
                </View>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#16247d' }}>កាត់សក់​ ម៉ូតទាន់សម័.ធ្វើម៉ូតសក់...</Text>
                    <Text style={{ fontSize: 18, marginTop: 8 }}>Popular Hairstyles</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ marginRight: '32%', marginTop: 20, fontSize: 18, color: 'red', fontWeight: 'bold' }}>$10.00</Text>
                        <View style={{ paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: '#16247d', borderRadius: 8 }}>
                            <Text style={{ fontSize: 18, color: '#16247d', fontWeight: 'bold' }}>Booking</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const renderScene = SceneMap({
    first: Men,
    second: Women,
    third: Kid,
});

export const SubService = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'first', title: 'Men'
        },
        {
            key: 'second', title: 'Women'
        },
        {
            key: 'third', title: 'Kid'
        },
    ]);

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={styles.indicator}
            style={{
                backgroundColor: '#f2f2f2'
            }}
            tabStyle={{
                width: width / 3,
                // backgroundColor: 'blue'
            }}
            // renderLabel={({props, }) => (
            //     <Text style={{ color: 'grey', margin: 8 }}>
            //       {props.route.title}
            //     </Text>
            //   )}
            renderLabel={({ route, focused, color }) => (
                <Text style={{ color: focused ? '#16247d' : 'black', margin: 8, fontSize: 18, fontWeight: 'bold' }}>
                    {route.title}
                </Text>
            )}
        ></TabBar>
    );


    const naviation: any = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.AppBar}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    naviation.goBack();

                }}>
                    <AntDesign name='arrowleft' color={'white'} size={28}></AntDesign>

                </TouchableOpacity>
                <Text style={styles.SubText}>Sub Service</Text>
                <AntDesign name='hearto' size={25} color={'white'}></AntDesign>
            </View>
            <View style={styles.Body}>
                <View style={styles.RowBodyI}>
                    <View style={styles.Image}>
                        <Image style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                    </View>
                    <View style={styles.FixText}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 8, paddingRight: '25%' }}>កាត់សក់បុរស</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 8, color: 'red' }}>$ 5.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#16247d', fontSize: 16, paddingBottom: 10, fontWeight: 'bold', paddingRight: '42%' }}>មែន​ ស្តាយ</Text>
                            <Text style={{ color: 'red', fontSize: 16, paddingBottom: 10, }}>Up</Text>
                        </View>
                        <Text style={{ fontSize: 16, paddingBottom: 10 }}>⭐⭐⭐⭐⭐ (3)</Text>
                        <Text style={{ fontSize: 16, color: 'grey', paddingBottom: 7 }}>ហាងយើងខ្ញុំផ្ដល់ជូនទាំងគុណភាព​ និង</Text>
                        <Text style={{ fontSize: 16, color: 'grey' }}>អនាម័យ ជូនបងប្អូន</Text>
                    </View>
                </View>
                <View style={{ marginTop: 30, alignContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: '38%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome6 name='location-dot' color={'#16247d'}></FontAwesome6>
                        <Text style={{ color: '#16247d', fontWeight: 'bold', paddingLeft: 5 }}>None</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <EvilIcons name='clock' color={'#16247d'} size={22}></EvilIcons>
                        <Text style={{ color: '#16247d', fontWeight: 'bold', paddingLeft: 5 }}>None</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: '15%' }}>
                    <TouchableOpacity onPress={()=>{
                        console.log("Click");
                        naviation.push('GalleryView');
                    }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#edeff3', borderRadius: 20 }}>
                            <FontAwesome name='image' size={23}></FontAwesome>
                            <Text style={{ marginLeft: 10 }}>Gallery</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        console.log("Make a Booking");
                        naviation.push('MakeBookingView');
                    }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#edeff3', marginLeft: 18, borderRadius: 20 }}>
                        <AntDesign name='isv' size={23} color={'#16247d'}></AntDesign>
                        <Text style={{ marginLeft: 10, color: '#16247d', fontWeight: 'bold' }}>MAKE A BOOKING</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.TabBar}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    style={{
                        backgroundColor: 'white'
                    }}
                    renderTabBar={renderTabBar}
                ></TabView>
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
        flexDirection: 'row'
    },
    SubText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '30%'
    },
    Body: {
        marginTop: '16%',
        width: 'auto',
        height: '24%',
        borderWidth: 1,
        borderColor: '#eef2fa',
        marginHorizontal: 15,
        borderRadius: 10,
        paddingRight: 10
    },
    RowBodyI: {
        width: 'auto',
        height: '48%',
        flexDirection: 'row',
    },
    Image: {
        width: '35%',
        height: '100%',
        backgroundColor: 'grey',
    },
    FixText: {
        paddingLeft: 10,
    },
    indicator: {
        backgroundColor: '#16247d',
        height: 2
    },
    TabBar: {
        width: 'auto',
        height: '100%',
        // backgroundColor: 'red'
    },
    CardListMen: {
        marginHorizontal: 15,
        padding: 10,
        width: 'auto',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 15
    },
    CardListWomen: {
        width: 'auto',
        backgroundColor: 'white',
        marginHorizontal: 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 15
    }
});