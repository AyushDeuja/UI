import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function ForgotPass({text}) {
  return (
    <View style={styles.ForgotPass}>
      <Text style={styles.Forgot}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ForgotPass:{
        bottom:25,
        paddingHorizontal:20        
    },
    Forgot:{
        color: '#02C685',
    },
    
})