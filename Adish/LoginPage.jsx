import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from './LoginComp/Logo';
import Input from './LoginComp/Input';
import EyeIcon from './LoginComp/EyeIcon';
import ForgotPass from './LoginComp/ForgotPass';
import Button from './LoginComp/Button';
import SignUp from './LoginComp/SignUp';

export default function LoginPage() {
  return (
    <View>
      <Logo/>

      <View style={{bottom:40}}>
        <Input text={'Phone Number'} icon={'phone'} />
        <Input text={'Password'} icon={'lock'} />
      </View>
      <EyeIcon is_pass={'false'} />
      <ForgotPass text={'Forgot password?'} textt={'ask for reset'} />
      <Button text={'LOGIN'} />
      <SignUp text={"Don't have an account?"} textt={' Sign Up'} />
    </View>
  );
}

const styles = StyleSheet.create({});
