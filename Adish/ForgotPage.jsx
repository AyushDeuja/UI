import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './HomeComp/NavBar'
import Profile from './ForgotPassComp/Profile'
import Input from './LoginComp/Input'
import ForgotPasssword from './ForgotPassComp/ForgotPassword'
import EyeIcon from './LoginComp/EyeIcon'
import ChangePass from './ForgotPassComp/ChangePass'
import SignIn from './ForgotPassComp/SignIn'

export default function ForgotPage() {
  return (
    <View>
        <NavBar
        icon={'arrow-left'}
        text={'Change Password'}
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
        <SignIn text={'Already have an account?'} textt={'  Sign in here!'}/>
    </View>
  )
}

const styles = StyleSheet.create({})