import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/HomeScreens/Home';

const HomeNav = createStackNavigator();

const HomeRoutes = () => (
  <HomeNav.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeNav.Screen name="Home" component={Home} />
  </HomeNav.Navigator>
);

export default HomeRoutes;
