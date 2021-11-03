import React from 'react';

import AuthRoutes from './auth.routes';
import TabsRoutes from './tabs.routes';

import LoadingScreen from '../screens/Loading';

import { useAuth } from '../hooks/auth';

const Routes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return user ? <TabsRoutes /> : <AuthRoutes />;
};

export default Routes;
