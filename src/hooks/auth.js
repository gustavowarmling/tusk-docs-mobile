import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { api } from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStoragedData() {
      setLoading(true);
      const [token, user] = await AsyncStorage.multiGet([
        '@tuskdocs:token',
        '@tuskdocs:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ username, password }) => {
    setLoading(true);
    const response = await api.post('sessions', {
      username,
      password,
    });

    const { jwt, user } = response.data;

    await AsyncStorage.multiSet([
      ['@tuskdocs:token', jwt.jwt],
      [
        '@tuskdocs:user',
        JSON.stringify(user.user ? user.user : user.validator),
      ],
    ]);

    setData({ token: jwt.jwt, user: user.user });
    setLoading(false);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@tuskdocs:token', '@tuskdocs:user']);

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
