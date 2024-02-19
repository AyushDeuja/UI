import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BgImg from './VerificationComp/BgImg'
import AccountText from './VerificationComp/AccountText'
import AnotherText from './VerificationComp/AnotherText'

export default function VerificationPage({navigation}) {
  const LoginStack = () => {
    navigation.navigate('login')
  }
  return (
    <View>
        <BgImg/>
        <AccountText/>
        <AnotherText onPress={LoginStack}/>
    </View>
  )
}

const styles = StyleSheet.create({})