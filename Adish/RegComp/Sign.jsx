import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sign({text,textt}) {
  return (
    <View style={styles.ForgotPass}>
      <Text style={styles.Forgot}>{text}</Text>
      <Text style={styles.Reset}>{textt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ForgotPass:{
        bottom:28,
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
        color: '#4BA0CB'
    }
})