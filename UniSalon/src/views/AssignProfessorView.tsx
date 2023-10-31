import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


export const AssignProfessorView = () => {
    const navigation: any = useNavigation();
    const [isStateTrue, setIsStateTrue] = useState(false);

    const toggleState = () => {
        setIsStateTrue(!isStateTrue);
    };

    // console.log("isStateTrue : ", isStateTrue)
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <View style={styles.AppBar}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    console.log("Back");
                    navigation.goBack();

                }}>
                    <AntDesign name='arrowleft' color={'white'} size={28}></AntDesign>
                </TouchableOpacity>
                <Text style={styles.SubText}>Assign Professors (Optional)</Text>
            </View>
            <View style={styles.BottomAppBar}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Select Professors</Text>
            </View>
            <ScrollView style={{marginBottom: '10%'}}>
                <TouchableOpacity activeOpacity={1} onPress={toggleState}> 
                <View style={styles.Role1}>
                    <View style={{
                        width: '47%',
                        height: 200,
                        borderWidth: 0.3,
                        borderRadius: 10,
                        flexDirection: 'column'
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 15, alignContent: 'space-between', paddingLeft: 35 }}>
                            <View style={{
                                width: 65,
                                height: 65,
                                backgroundColor: 'yellow',
                                borderRadius: 65 / 2,
                                marginTop: 15
                            }}>
                                <Image style={{ width: 65, height: 65, flex: 1, borderRadius: 65 / 2 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                            </View>
                           <View style={{width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 2, borderColor: 'grey', marginLeft: 20, backgroundColor: isStateTrue ? 'white' : 'grey'}}></View>
                        </View>
                        <Text style={{ marginLeft: 28, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>Professor Sythan</Text>
                        <Text style={{ marginLeft: 40, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>⭐⭐⭐⭐⭐</Text>
                        <Text style={{ marginTop: 8, marginLeft: 23 }}>8 Credits / 2 Reviews</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}></View>
                    <View style={{
                        width: '47%',
                        height: 200,
                        borderWidth: 0.3,
                        borderRadius: 10,
                        flexDirection: 'column'
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 15, alignContent: 'space-between', paddingLeft: 35 }}>
                            <View style={{
                                width: 65,
                                height: 65,
                                backgroundColor: 'yellow',
                                borderRadius: 65 / 2,
                                marginTop: 15
                            }}>
                                <Image style={{ width: 65, height: 65, flex: 1, borderRadius: 65 / 2 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                            </View>
                            <View style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 2, borderColor: 'grey', marginLeft: 20 }}></View>
                        </View>
                        <Text style={{ marginLeft: 28, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>Professor Sythan</Text>
                        <Text style={{ marginLeft: 40, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>⭐⭐⭐⭐⭐</Text>
                        <Text style={{ marginTop: 8, marginLeft: 23 }}>8 Credits / 2 Reviews</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}></View>
                </View>
                </TouchableOpacity>
                <View style={styles.Role2}>
                    <View style={{
                        width: '47%',
                        height: 200,
                        borderWidth: 0.3,
                        borderRadius: 10,
                        flexDirection: 'column'
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 15, alignContent: 'space-between', paddingLeft: 35 }}>
                            <View style={{
                                width: 65,
                                height: 65,
                                backgroundColor: 'yellow',
                                borderRadius: 65 / 2,
                                marginTop: 15
                            }}>
                                <Image style={{ width: 65, height: 65, flex: 1, borderRadius: 65 / 2 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                            </View>
                            <View style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 2, borderColor: 'grey', marginLeft: 20 }}></View>
                        </View>
                        <Text style={{ marginLeft: 28, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>Professor Sythan</Text>
                        <Text style={{ marginLeft: 40, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>⭐⭐⭐⭐⭐</Text>
                        <Text style={{ marginTop: 8, marginLeft: 23 }}>8 Credits / 2 Reviews</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}></View>
                    <View style={{
                        width: '47%',
                        height: 200,
                        borderWidth: 0.3,
                        borderRadius: 10,
                        flexDirection: 'column'
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 15, alignContent: 'space-between', paddingLeft: 35 }}>
                            <View style={{
                                width: 65,
                                height: 65,
                                backgroundColor: 'yellow',
                                borderRadius: 65 / 2,
                                marginTop: 15
                            }}>
                                <Image style={{ width: 65, height: 65, flex: 1, borderRadius: 65 / 2 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                            </View>
                            <View style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 2, borderColor: 'grey', marginLeft: 20 }}></View>
                        </View>
                        <Text style={{ marginLeft: 28, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>Professor Sythan</Text>
                        <Text style={{ marginLeft: 40, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>⭐⭐⭐⭐⭐</Text>
                        <Text style={{ marginTop: 8, marginLeft: 23 }}>8 Credits / 2 Reviews</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}></View>
                </View>
                <View style={styles.Role2}>
                    <View style={{
                        width: '47%',
                        height: 200,
                        borderWidth: 0.3,
                        borderRadius: 10,
                        flexDirection: 'column'
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 15, alignContent: 'space-between', paddingLeft: 35 }}>
                            <View style={{
                                width: 65,
                                height: 65,
                                backgroundColor: 'yellow',
                                borderRadius: 65 / 2,
                                marginTop: 15
                            }}>
                                <Image style={{ width: 65, height: 65, flex: 1, borderRadius: 65 / 2 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                            </View>
                            <View style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 2, borderColor: 'grey', marginLeft: 20 }}></View>
                        </View>
                        <Text style={{ marginLeft: 28, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>Professor Sythan</Text>
                        <Text style={{ marginLeft: 40, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>⭐⭐⭐⭐⭐</Text>
                        <Text style={{ marginTop: 8, marginLeft: 23 }}>8 Credits / 2 Reviews</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}></View>
                    <View style={{
                        width: '47%',
                        height: 200,
                        borderWidth: 0.3,
                        borderRadius: 10,
                        flexDirection: 'column'
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 15, alignContent: 'space-between', paddingLeft: 35 }}>
                            <View style={{
                                width: 65,
                                height: 65,
                                backgroundColor: 'yellow',
                                borderRadius: 65 / 2,
                                marginTop: 15
                            }}>
                                <Image style={{ width: 65, height: 65, flex: 1, borderRadius: 65 / 2 }} source={require('../../assets/imgs/img1.jpg')}></Image>
                            </View>
                            <View style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 2, borderColor: 'grey', marginLeft: 20 }}></View>
                        </View>
                        <Text style={{ marginLeft: 28, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>Professor Sythan</Text>
                        <Text style={{ marginLeft: 40, marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>⭐⭐⭐⭐⭐</Text>
                        <Text style={{ marginTop: 8, marginLeft: 23 }}>8 Credits / 2 Reviews</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}></View>
                </View>
            </ScrollView>
            <TouchableOpacity activeOpacity={1} onPress={()=>{
                console.log("IsState: ",isStateTrue);
                if(isStateTrue == true){
                    console.log("Can't push new screen");
                }else{
                    navigation.push('ChooseServiceView');
                }
            }}>
                <View style={styles.BtnButton}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{isStateTrue ? 'Skip' : 'Next'}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AppBar: {
        paddingHorizontal: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#16247d',
        // position: 'absolute',
        alignItems: 'flex-start',
        paddingTop: '3%',
        flexDirection: 'row',
        verticalAlign: 'middle'
    },
    SubText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '10%'
    },
    BottomAppBar: {
        width: '100%',
        height: 55,
        borderWidth: 1,
        borderColor: '#ebebec',
        // position: 'absolute',
        alignContent: 'center',
        verticalAlign: 'middle',
        paddingLeft: 15,
        paddingTop: 15,
    },
    BtnButton: {
        marginBottom: 15,
        bottom: 0,
        position: 'absolute',
        marginHorizontal: 15,
        width: '92.5%',
        paddingVertical: 15,
        backgroundColor: '#16247d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Role1: {
        flexDirection: 'row',
        marginTop: '5%',
        alignItems: 'center',
        alignContent: 'space-around',
        marginHorizontal: 15
    },
    Role2: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'space-around',
        marginHorizontal: 15
    }
})