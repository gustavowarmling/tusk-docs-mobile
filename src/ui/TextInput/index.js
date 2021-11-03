import React, { useEffect, useRef } from 'react';
import { Text, View, TextInput } from 'react-native';

import { useField } from '@unform/core';

import styles from './styles';

const TextInputComponent = ({
  dark,
  name,
  label,
  rawText,
  onInitialData,
  ...others
}) => {
  const { registerField, defaultValue = '', fieldName } = useField(name);
  const inputRef = useRef({ value: defaultValue });

  useEffect(() => {
    if (onInitialData) onInitialData(defaultValue);
  }, [defaultValue, onInitialData]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        inputRef.current.value = value;
      },
      clearValue() {
        inputRef.current.value = '';
      },
      getValue() {
        if (rawText) return rawText;

        if (inputRef.current) return inputRef.current.value;

        return '';
      },
    });
  }, [fieldName, registerField, rawText]);

  return (
    <View>
      <Text style={dark ? styles.textInputLabelDark : styles.textInputLabel}>
        {label}
      </Text>
      <TextInput
        defaultValue={defaultValue}
        onChangeText={value => {
          inputRef.current.value = value;
        }}
        style={dark ? styles.inputDark : styles.input}
        placeholder="Senha"
        placeholderTextColor={dark ? '#76777A' : '#ffffff66'}
        {...others}
      />
    </View>
  );
};

export default TextInputComponent;
