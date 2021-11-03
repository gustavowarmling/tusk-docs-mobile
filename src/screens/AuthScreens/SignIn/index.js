import React, { useCallback, useRef } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

import { Button, TextInput } from '../../../ui';

import { useAuth } from '../../../hooks/auth';
import styles from './styles';
import logo from '../../../assets/images/logo.png';

const SignIn = () => {
  const formRef = useRef(null);
  const { signIn, loading } = useAuth();
  const navigation = useNavigation();

  const handleSignIn = useCallback(
    async data => {
      try {
        await signIn({
          username: data.username,
          password: data.password,
        });
        navigation.navigate('SignIn');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    [signIn, navigation],
  );

  return (
    <LinearGradient
      colors={['#026DB0', '#318AC9', '#368DCC']}
      style={styles.container}
      start={{ x: -0.5, y: 0 }}
      locations={[0.25, 0.6, 0.8]}
    >
      <View style={styles.header}>
        <Image resizeMode="contain" source={logo} style={styles.logo} />
      </View>

      <Form
        ref={formRef}
        onSubmit={handleSignIn}
        initialData={{ user: '', password: '' }}
      >
        <Text style={styles.title}>Entrar</Text>

        <TextInput name="username" placeholder="Usuário" label="Usuário" />
        <TextInput
          name="password"
          placeholder="Senha"
          label="Senha"
          secureTextEntry
        />
      </Form>

      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0082CB" />
        ) : (
          <Button
            style={{ width: 300 }}
            onPress={() => formRef.current?.submitForm()}
          >
            ENTRAR
          </Button>
        )}
      </View>
    </LinearGradient>
  );
};

export default SignIn;
