import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SignUp({text,textt,onPress}) {
  return (
    <View style={styles.ForgotPass}>
      <Text style={styles.Forgot}>{text}</Text>
      <Text style={styles.Reset} onPress={onPress}>{textt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ForgotPass:{
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    Forgot:{
        color: 'black',
    },
    Reset:{
        fontWeight: 'bold',
        color: '#02C685'
    }
})