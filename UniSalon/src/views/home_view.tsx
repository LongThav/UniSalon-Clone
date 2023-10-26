import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";


export const HomeView = () => {
    return (
        <SafeAreaView style={styles.SafeAreaContainter}>
            <View>
                <Text>Home View</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeAreaContainter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});