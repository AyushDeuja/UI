import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import LoginPage from './LoginPage';
import SettingPage from './SettingPage';
import ChangePassPage from './ChangePassPage';
import RegisterPage from './RegisterPage';
import VerificationPage from './VerificationPage';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{title: 'LoginPage'}}
        />
        <Stack.Screen
          name="setting"
          component={SettingPage}
          options={{title: 'SettingPage'}}
        />
        <Stack.Screen
          name="password"
          component={ChangePassPage}
          options={{title: 'ChangePassPage'}}
        />
        <Stack.Screen
          name="register"
          component={RegisterPage}
          options={{title: 'RegisterPage'}}
        />
        <Stack.Screen
          name="verify"
          component={VerificationPage}
          options={{title: 'VerificationPage'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;