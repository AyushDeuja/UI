import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './LoginComp/Logo'
import Input from './LoginComp/Input'
import EyeCrt from './RegComp/EyeCrt'
import EyeReEnt from './RegComp/EyeReEnt'
import CreateAcc from './RegComp/CreateAcc'
import Sign from './RegComp/Sign'

export default function RegisterPage() {
  return (
    <View>
        <Logo/>

        <View style={{bottom:50}}>
            <Input text={'Full Name'} icon={'user'}/>
            <Input text={'Phone Number'} icon={'phone'} />
            <Input text={'Create Password'} icon={'lock'} />
            <Input text={'Re-Enter Password'} icon={'lock'} />
        </View>
      <EyeCrt is_pass={'false'}/>
      <EyeReEnt is_pass={'false'}/>
        <CreateAcc text={'Create Account'}/>
        <Sign text={"Already have an account?"} textt={' Sign in here'}/>
    </View>
  )
}

const styles = StyleSheet.create({})