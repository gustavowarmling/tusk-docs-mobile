import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './routes';
import { AuthProvider } from './hooks/auth';

const App = () => (
  <NavigationContainer>
    <AuthProvider>
      <StatusBar backgroundColor="#026DB0" />
      <Routes />
    </AuthProvider>
  </NavigationContainer>
);

export default App;
