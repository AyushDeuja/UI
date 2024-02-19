import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './SettingComp/NavBar'
import Profile from './ChangePassComp/Profile'
import Input from './LoginComp/Input'
import ForgotPasssword from './ChangePassComp/ForgotPassword'
import EyeIcon from './LoginComp/EyeIcon'
import ChangePass from './ChangePassComp/ChangePass'
import SignIn from './ChangePassComp/SignIn'

export default function ChangePassPage({navigation}) {
  const LoginStack = () => {
    navigation.navigate('login')
  }
  const SettingStack = () => {
    navigation.navigate('setting')
  }
  return (
    <View>
        <NavBar
        icon={'arrow-left'}
        text={'Change Password'}
        onPress={SettingStack}
        />
        <Profile
        name={'Chris Rock'}
        number={'9807654321'}
        />
        <Input text={'Old Password'} icon={'lock'}/>
        <View style={{bottom:37}}><EyeIcon is_pass={'false'}/></View>
        <View style={{paddingVertical:5}}>
        <ForgotPasssword text={'Forgot Your Password?'}/>
        </View>
        <Input text={'New Password'} icon={'lock'} />
        <View style={{bottom:37}}><EyeIcon is_pass={'false'}/></View>
        <Input text={'Confirm New Password'} icon={'lock'} />
        <View style={{bottom:37}}><EyeIcon is_pass={'false'}/></View>
        <View style={{paddingVertical:30}}><ChangePass text={'Change Password'}/></View>
        <SignIn text={'Already have an account?'} textt={'  Sign in here!'} onPress={LoginStack}/>
    </View>
  )
}

const styles = StyleSheet.create({})