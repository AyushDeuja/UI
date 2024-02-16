import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { number } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function ImageContainer({name,number,icon}) {
  return (
    <View style={styles.ImgContainer}>
        <View style={styles.Image}>
        <Image
      source={require('../Image/img.png')}
      style={{height:75,width:75}}
      />
      </View>
      <Text style={styles.Name}>{name}</Text>
      <Text style={styles.Number}>{number}</Text>
      <View style={styles.Icon}>
        <FontAwesomeIcon icon={icon} size={20}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Icon:{
        position:'absolute',
        right:5,
        top:65
    },
    Name:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
        position:'absolute',
        left: 110,
        top:20,
    },
    ImgContainer:{
        margin: 20,
        borderWidth: 0.3,
        borderRadius: 5,
        height:95,
    },
    Image:{
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius:6,
    },
    Number:{
        position: 'absolute',
        left: 111,
        top: 45,
        color: 'grey'
    },
})