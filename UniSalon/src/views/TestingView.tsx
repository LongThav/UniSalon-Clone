import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TestingView = () => {
  return (
    <View style={styles.container}>
      <Text>TestingView</Text>
    </View>
  )
}

export default TestingView

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})