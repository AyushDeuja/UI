import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function NavBar({icon,text,onPress}) {
  return (
    <View style={styles.NavContainer}>
      <TouchableOpacity onPress={onPress}>
        <FontAwesomeIcon icon={icon} size={20}/> 
      </TouchableOpacity>
        <Text style={styles.Text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    NavContainer:{
        paddingVertical: 30,
        paddingHorizontal:20,
    },
    Text:{
        fontWeight: '600',
        position:'absolute',
        fontSize: 15,
        color: '#000',
        right: 20,
        paddingVertical:30,
    },
})