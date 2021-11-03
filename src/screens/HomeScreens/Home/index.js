import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import logo from '../../../assets/images/logo.png';

const HomeScreen = () => {
  const [listUsedPasses, setListUsedPasses] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#026DB0', '#318AC9']}
        style={styles.header}
        start={{ x: -0.5, y: 0 }}
        locations={[0.3, 0.9]}
      >
        <Image resizeMode="contain" source={logo} style={styles.logo} />
      </LinearGradient>

      <View style={styles.passesToggleView}>
        <TouchableOpacity
          style={styles.secondPassToggle}
          onPress={() => setListUsedPasses(true)}
        >
          <Text
            style={
              listUsedPasses
                ? styles.passesTogleActiveText
                : styles.passesTogleInactiveText
            }
          >
            DOCUMENTOS CADASTRADOS
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
