import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Profile({name,number}) {
  return (
    <View style={styles.Profile}>
        <View style={{alignItems: 'center'}}>
        <Image
      source={require('../Image/img.png')}
      style={{height:75,width:75}}
      />
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={styles.Name}>{name}</Text>
      <Text style={styles.Number}>{number}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Profile:{
        paddingVertical:40
    },
    Name:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
    },
    Number:{
        color: 'grey',
        fontSize: 14
    },
})