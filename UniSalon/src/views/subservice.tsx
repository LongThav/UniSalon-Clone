import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, useWindowDimensions, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
const { width } = Dimensions.get('window')

const Men = () => {
    return (
        <View style={{ width: 200, height: 200, backgroundColor: 'red' }}>
            <Text>Men</Text></View>
    );
}

const Women = () => {
    return (
        <View><Text>Women</Text></View>
    );
}

const Kid = () => {
    return (
        <View><Text>Kid</Text></View>
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
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#edeff3', borderRadius: 20 }}>
                        <FontAwesome name='image' size={23}></FontAwesome>
                        <Text style={{ marginLeft: 10 }}>Gallery</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#edeff3', marginLeft: 18, borderRadius: 20 }}>
                        <AntDesign name='isv' size={23} color={'#16247d'}></AntDesign>
                        <Text style={{ marginLeft: 10, color: '#16247d', fontWeight: 'bold' }}>MAKE A BOOKING</Text>
                    </View>
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
});