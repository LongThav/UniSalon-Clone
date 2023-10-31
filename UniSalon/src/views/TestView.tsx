import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'

const TestView = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Click' onPress={()=>{
            console.log("Click Click");
            
        }}></Button>
    </SafeAreaView>
  )
}

export default TestView