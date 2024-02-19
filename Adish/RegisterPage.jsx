import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from './LoginComp/Logo';
import Input from './LoginComp/Input';
import CreateAcc from './RegComp/CreateAcc';
import EyeIcon from './LoginComp/EyeIcon';
import SignUp from './LoginComp/SignUp';

export default function RegisterPage({navigation}) {
  const LoginStack = () => {
    navigation.navigate('login')
  }
  const CreateAccStack = () => {
    navigation.navigate('verify')
  }
  
  return (
    <View>
      <Logo />

      <View style={{bottom: 50}}>
        <Input text={'Full Name'} icon={'user'} />
        <Input text={'Phone Number'} icon={'phone'} />
        <Input text={'Create Password'} icon={'lock'} />
        <Input text={'Re-Enter Password'} icon={'lock'} />
      </View>
      <View style={{bottom: 148}}>
        <EyeIcon is_pass={'false'} />
      </View>
      <View style={{bottom: 87}}>
        <EyeIcon is_pass={'false'} />
      </View>
      <CreateAcc text={'Create Account'} onPress={CreateAccStack}/>
      <View style={{bottom: 30}}>
        <SignUp text={'Already have an account?'} textt={' Sign in here'} onPress={LoginStack}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
