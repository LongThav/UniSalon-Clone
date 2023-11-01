import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MemberShipView = () => {
  return (
    <View style={styles.AppBar}>
      <Text>MemberShipView</Text>
    </View>
  )
}

export default MemberShipView

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    paddingVertical: 15, 
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: 'white'
  }
})