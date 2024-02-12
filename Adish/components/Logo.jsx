import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function Logo({image}) {
  return (
    <View style={styles.LogoImage}>
      <Image
      source={{
        uri: image,
      }}
      style={{height:80,width:80}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    LogoImage:{
        paddingHorizontal: 150,
        paddingVertical:100
    },

})