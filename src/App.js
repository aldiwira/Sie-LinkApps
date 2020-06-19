import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screen/SplashScreen/';
import AuthScreen from './screen/LoginScreen';

const stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      setsplashStat(false);
    }, time + 500);
  });
  const time = 2000;
  const [splashStat, setsplashStat] = useState(true);
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        {splashStat ? (
          <stack.Screen
            component={SplashScreen}
            name="Splash"
            initialParams={{time: time}}
          />
        ) : null}
        <stack.Screen component={AuthScreen} name="Auth" />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
