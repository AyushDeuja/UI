import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function ForgotPasssword({text}) {
  return (
    <View style={styles.ForgotPass}>
      <Text style={styles.Forgot}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ForgotPass:{
        paddingHorizontal:20        
    },
    Forgot:{
        color: '#02C685',
    },
    
})