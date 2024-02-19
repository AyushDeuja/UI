import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function BgImg({image}) {
  return (
    <View style={styles.LogoImage}>
      <Image
      source={require('../Image/VerificationImg.png')}
      style={{height:812,width:375}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    LogoImage:{
        paddingVertical:40,
    },

})