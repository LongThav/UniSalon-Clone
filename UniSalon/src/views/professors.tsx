import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

export const ProfessorView = () => {
    return (
        <SafeAreaView>
            <View style={styles.Appbar}>
                <Feather name="menu" size={24} style={{
                    color: 'white',
                    paddingRight: 125
                }} />
                <Text style={styles.TitleAppbar}>All Professors</Text>
                <AntDesign name="search1" size={24} style={{
                    color: 'white',
                    // paddingRight: 125
                }} />
            </View>
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
        paddingRight: 90
    },
});