import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/AuthScreens/SignIn';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default AuthRoutes;
