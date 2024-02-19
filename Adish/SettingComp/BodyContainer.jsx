import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { text } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function BodyContainer({text,icon}) {
  return (
    <View>
        <View style={styles.Logo}>
        <Image
      source={require('../Image/accountImg.png')}
      style={{height:50,width:50}}
      />
      </View>
      <Text style={styles.Text}>{text}</Text>
      <View style={styles.Icon}>
        <FontAwesomeIcon icon={icon} size={20}/>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    Icon:{
        position: 'absolute',
        right: 25,
        top: 15
    },
    Logo:{
        paddingHorizontal:30
    },
    Text:{
        fontWeight: '600',
        color: '#000',
        fontSize: 18,
        position:'absolute',
        left:100,
        top:11
    },
})