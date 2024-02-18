import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function Logo({image}) {
  return (
    <View style={styles.LogoImage}>
      <Image
      source={require('../Image/logo.png')}
      style={{height:134,width:125}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    LogoImage:{
        alignItems: 'center',
        paddingVertical:100
    },

})