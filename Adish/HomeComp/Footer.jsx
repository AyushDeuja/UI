import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function Footer() {
  return (
    <View style={{flexDirection: 'row', paddingHorizontal:70}}>
    <View style={styles.Home}>
        <FontAwesomeIcon icon={'house'} size={25}/>
        <Text style={{right:5}}>Home</Text>
    </View>
    <View style={styles.Home}>
        <FontAwesomeIcon icon={'gear'} size={25}/>
        <Text style={{right:12}}>Settings</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Home:{
        paddingHorizontal:40,
        paddingVertical:40,
    },
})