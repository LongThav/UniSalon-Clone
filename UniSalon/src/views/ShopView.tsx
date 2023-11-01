import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import { Image } from "react-native";

//navigation.openDrawer();
export const ShopView = () => {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView>
           <TouchableOpacity activeOpacity={1} onPress={()=>{
            navigation.openDrawer();
             <View style={styles.Appbar}>
                <Feather name="menu" size={24} style={{
                    color: 'white',
                    paddingRight: 125
                }} />
                <Text style={styles.TitleAppbar}>Shops</Text>
            </View>
           }}>
           <View style={styles.Appbar}>
                <Feather name="menu" size={24} style={{
                    color: 'white',
                    paddingRight: 125
                }} />
                <Text style={styles.TitleAppbar}>Shops</Text>
            </View>
           </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.SearchBar}>
                    <EvilIcons name="search" size={24} color="grey" />
                    <Text style={{ paddingHorizontal: 10 }}>Search Salons...</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#16247d', paddingVertical: 15, marginHorizontal: 15 }}>Recommend Salons</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {/* <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="Second" component={SecondScreen} />
                        </Stack.Navigator>
                    </NavigationContainer> */}
                    <TouchableOpacity onPress={() => {
                        console.log("Push new screen");
                    }}>
                        <View style={{ width: 'auto', height: 160, marginLeft: 15, }}>
                            <View style={{ width: 150, height: 60, backgroundColor: 'grey', marginBottom: 8 }}></View>
                            <Text>មែនស្តាយ</Text>
                            <Text>⭐⭐⭐⭐⭐ (3)</Text>
                            <View style={{
                                width: 150,
                                marginTop: 10,
                                height: 40,
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: '#16247d',
                                alignContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                            }}><Text>Booking Now</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: 'auto', height: 160, marginLeft: 15, }}>
                        <View style={{ width: 150, height: 60, backgroundColor: 'grey', marginBottom: 8 }}></View>
                        <Text>មែនស្តាយ</Text>
                        <Text>⭐⭐⭐⭐⭐ (3)</Text>
                        <View style={{
                            width: 150,
                            marginTop: 10,
                            height: 40,
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: '#16247d',
                            alignContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}><Text>Booking Now</Text>
                        </View>
                    </View>
                    <View style={{ width: 'auto', height: 160, marginLeft: 15, }}>
                        <View style={{ width: 150, height: 60, backgroundColor: 'grey', marginBottom: 8 }}></View>
                        <Text>មែនស្តាយ</Text>
                        <Text>⭐⭐⭐⭐⭐ (3)</Text>
                        <View style={{
                            width: 150,
                            marginTop: 10,
                            height: 40,
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: '#16247d',
                            alignContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}><Text>Booking Now</Text>
                        </View>
                    </View>
                </ScrollView>
                <Text style={{ paddingLeft: 15, paddingTop: 15, fontSize: 18, color: '#16247d' }}>More Salons</Text>
                <View style={{ width: 'auto', height: 150, margin: 15, paddingLeft: 10, paddingTop: 5, flexDirection: 'row' }}>
                    <View style={{
                        width: 120,
                        height: 120,
                        backgroundColor: '#ebebec',
                        borderRadius: 10,
                    }}>
                        <Image style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <View>
                                <Text style={{ fontSize: 18, color: 'black' }}>ប៉ែន ស្តាយ</Text>
                                <Text>⭐⭐⭐⭐⭐ (3)</Text>
                            </View>
                            <View style={{ width: 70, height: 30, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#16247d', marginLeft: 30 }}>
                                <Text>Booking</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 16, color: 'grey' }}>បម្រើសេវាកម្មជូនអស់លោក</Text>
                            <Text style={{ fontSize: 16, color: 'grey' }}>លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ paddingVertical: 10 }}>None</Text>
                                <Text style={{ paddingHorizontal: 20, paddingVertical: 10 }}>Opening</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: 'auto', height: 150, margin: 15, paddingLeft: 10, paddingTop: 5, flexDirection: 'row' }}>
                    <View style={{
                        width: 120,
                        height: 120,
                        backgroundColor: '#ebebec',
                        borderRadius: 10,
                    }}>
                        <Image style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <View>
                                <Text style={{ fontSize: 18, color: 'black' }}>ប៉ែន ស្តាយ</Text>
                                <Text>⭐⭐⭐⭐⭐ (3)</Text>
                            </View>
                            <View style={{ width: 70, height: 30, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#16247d', marginLeft: 30 }}>
                                <Text>Booking</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 16, color: 'grey' }}>បម្រើសេវាកម្មជូនអស់លោក</Text>
                            <Text style={{ fontSize: 16, color: 'grey' }}>លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ paddingVertical: 10 }}>None</Text>
                                <Text style={{ paddingHorizontal: 20, paddingVertical: 10 }}>Opening</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: 'auto', height: 150, margin: 15, paddingLeft: 10, paddingTop: 5, flexDirection: 'row' }}>
                    <View style={{
                        width: 120,
                        height: 120,
                        backgroundColor: '#ebebec',
                        borderRadius: 10,
                    }}>
                        <Image style={{ flex: 1, width: undefined, height: undefined, borderRadius: 10 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <View>
                                <Text style={{ fontSize: 18, color: 'black' }}>ប៉ែន ស្តាយ</Text>
                                <Text>⭐⭐⭐⭐⭐ (3)</Text>
                            </View>
                            <View style={{ width: 70, height: 30, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#16247d', marginLeft: 30 }}>
                                <Text>Booking</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 16, color: 'grey' }}>បម្រើសេវាកម្មជូនអស់លោក</Text>
                            <Text style={{ fontSize: 16, color: 'grey' }}>លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ paddingVertical: 10 }}>None</Text>
                                <Text style={{ paddingHorizontal: 20, paddingVertical: 10 }}>Opening</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Appbar: {
        width: "auto",
        height: 60,
        backgroundColor: '#16247d',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    TitleAppbar: {
        fontSize: 18,
        color: 'white',
    },
    SearchBar: {
        width: 'auto',
        margin: 15,
        height: 45,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
});