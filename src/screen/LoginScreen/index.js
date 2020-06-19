import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import loginScreen from './login/index';
import registerScreen from './register/index';

const stackLogin = createStackNavigator();

const loginRoute = () => {
  return (
    <stackLogin.Navigator screenOptions={{headerShown: false}}>
      <stackLogin.Screen component={loginScreen} name="login" />
      <stackLogin.Screen component={registerScreen} name="register" />
    </stackLogin.Navigator>
  );
};

export default loginRoute;
