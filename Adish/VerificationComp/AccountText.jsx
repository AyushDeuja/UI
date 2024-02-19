import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AccountText() {
  return (
    <View style={styles.Text}>
      <Text style={{fontSize:22,fontWeight:'bold',color:'#FFFFFF'}}>Your Account</Text>
      <Text style={{fontSize:22,fontWeight:'bold', color:'#FFFFFF'}}>Is Under Verification</Text>
      <Text style={{fontSize:15,fontWeight:'500', color:'#FFFFFF',marginTop:8}}>Please try after a few more minutes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Text:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    height: '100%',
    top:150
    }
})