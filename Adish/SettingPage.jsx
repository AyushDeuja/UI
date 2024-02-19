import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './SettingComp/NavBar'
import ImageContainer from './SettingComp/ImageContainer'
import BodyContainer from './SettingComp/BodyContainer'
import BodyContainerr from './SettingComp/BodyContainerr'
import LogOut from './SettingComp/LogOut'
import Footer from './SettingComp/Footer'

export default function SettingPage({navigation}) {
  const LoginStack = () => {
    navigation.navigate('login')
  }
  const ChangePassStack = () => {
    navigation.navigate('password')
  }
  return (
    <View>
        <NavBar
        icon={'arrow-left'}
        text={'Setting'}
        onPress={LoginStack}
        />
        <View style={{bottom:20}}>
        <ImageContainer
        icon={'file-pen'}
        name={'Chris Rock'}
        number={'9807654321'}
        />
        </View>
        <BodyContainer
        text={'Account Info'}
        icon={'greater-than'}
        />
        <View style={{paddingVertical:20}}>
        <BodyContainerr
        text={'Change Password'}
        icon={'greater-than'}
        onPress={ChangePassStack}
        />
        </View>
        <View style={{paddingVertical:220}}>
        <LogOut
        text={'Log Out'}
        onPress={LoginStack}
        />
        <Footer/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})