import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CreateAcc({text,onPress}) {
  return (
    <TouchableOpacity style={styles.LoginButton} onPress={onPress}>
    <View style={styles.LoginContainer}>
        <Text style={styles.LoginText}>{text}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    LoginButton:{
        alignItems: 'center',
        bottom:30
    },
    LoginContainer:{
        borderRadius: 10,
        backgroundColor: '#02C685',
        height:56,
        width:208,
        justifyContent: 'center',
    },
    LoginText:{
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
})