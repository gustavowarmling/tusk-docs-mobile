import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ dark, empty, onPress, children, width, style, ...rest }) => {
  const darkColor = '#0082CB';
  const lightColor = '#fff';

  let buttonStyle = [];
  let textStyle = [];

  if (dark) {
    buttonStyle = [style, styles.button, { backgroundColor: darkColor }];
    textStyle = [styles.text, { color: lightColor }];
  } else if (empty) {
    buttonStyle = [
      style,
      styles.button,
      {
        backgroundColor: lightColor,
        borderWidth: 2,
        borderColor: darkColor,
      },
    ];
    textStyle = [styles.text, { color: darkColor }];
  } else {
    buttonStyle = [style, styles.button, { backgroundColor: lightColor }];
    textStyle = [styles.text, { color: darkColor }];
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} {...rest}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
