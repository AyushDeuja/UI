import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({text,onPress}) {
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
        bottom:10,
    },
    LoginContainer:{
        borderRadius: 10,
        backgroundColor: '#02C685',
        height:50,
        width:Dimensions.get('screen').width-30,
        justifyContent: 'center',
    },
    LoginText:{
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
})