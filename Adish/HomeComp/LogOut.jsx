import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LogOut({text}) {
  return (
    <TouchableOpacity style={styles.LoginButton}>
    <View style={styles.LoginContainer}>
        <Text style={styles.LoginText}>{text}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    LoginButton:{
        alignItems: 'center',
        
    },
    LoginContainer:{
        borderRadius: 10,
        backgroundColor: '#9F0303',
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