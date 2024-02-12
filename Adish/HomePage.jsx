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
      <Logo
        image={
          'https://techware.com.np/storage/portfolio/3R6TyGpTVy7UTQZ5c0X0p9e5EmF9S3D8OwWlmG0B.png'
        }
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          paddingHorizontal: 20,
          position: 'absolute',
          paddingVertical: 230,
          color: '#000',
        }}>
        Hello.
      </Text>
      <Text
        style={{
          fontSize: 18,
          paddingHorizontal: 20,
          position: 'absolute',
          paddingVertical: 270,
          color: 'grey',
        }}>
        Welcome Back
      </Text>
      <View style={{paddingVertical: 25}}>
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
