import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from './components/Logo';
import Input from './components/Input';
import EyeIcon from './components/EyeIcon';
import ForgotPass from './components/ForgotPass';
import Button from './components/Button';
import SignUp from './components/SignUp';

export default function HomePage() {
  return (
    <View>
      <Logo/>

      <View style={{bottom:27}}>
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
