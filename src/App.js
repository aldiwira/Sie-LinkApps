import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screen/SplashScreen/';

const stack = createStackNavigator();

const App = () => {
  useEffect(() => {});
  const [splashStat, setsplashStat] = useState(false);
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        {splashStat ? (
          'none'
        ) : (
          <stack.Screen component={SplashScreen} name="Splash" />
        )}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
