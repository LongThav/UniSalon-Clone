import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const AssignProfessorView = () => {
    const navigation: any = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.AppBar}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    navigation.goBack();

                }}>
                    <AntDesign name='arrowleft' color={'white'} size={28}></AntDesign>
                </TouchableOpacity>
                <Text style={styles.SubText}>Assign Professors (Optional)</Text>
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
        verticalAlign: 'middle'
    },
    SubText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '10%'
    },
})