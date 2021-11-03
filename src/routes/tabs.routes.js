import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTab from './home.routes';

import TabComponent from '../ui/TabNavigator';

const TabNav = createBottomTabNavigator();

const TabNavigator = () => (
  <TabNav.Navigator
    tabBar={props => <TabComponent {...props} />}
    screenOptions={{
      headerShown: false,
    }}
  >
    <TabNav.Screen
      name="HomeTab"
      options={{ tabBarLabel: 'INÍCIO' }}
      component={HomeTab}
    />
  </TabNav.Navigator>
);

export default TabNavigator;
