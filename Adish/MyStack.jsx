import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import HomePage from './HomePage';
import ForgotPage from './ForgotPage';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{title: 'HomePage'}}
        />
        <Stack.Screen
          name="forgot"
          component={ForgotPage}
          options={{title: 'ForgotPage'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;