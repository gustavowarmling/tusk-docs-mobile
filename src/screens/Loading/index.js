import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const LoadingScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#009CCD" />
  </View>
);

export default LoadingScreen;
