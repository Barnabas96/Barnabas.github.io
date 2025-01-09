// navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import loginScreen from '../app/loginScreen'; 
import playScreen from '../app/(tabs)/(inside)/video/playScreen'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Play" component={playScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
