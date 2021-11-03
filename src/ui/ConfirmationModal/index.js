import React from 'react';
import { Text, View } from 'react-native';

import Button from '../Button';

import styles from './styles';
import { WarnIcon, CheckMarkIcon } from '../../assets/icons';

const ConfirmationModal = ({
  visible,
  setVisible,
  onConfirm,
  confirmText,
  title,
  description,
  type,
}) => {
  return (
    visible && (
      <View style={styles.background}>
        <View style={styles.container}>
          {type === 'INFO' ? (
            <View style={styles.infoCircle}>
              <CheckMarkIcon />
            </View>
          ) : (
            <View style={styles.errorCircle}>
              <WarnIcon />
            </View>
          )}
          <Text style={styles.title}>{title}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
          <Button
            empty
            style={{ marginBottom: 10, width: '80%' }}
            onPress={() => {
              setVisible(false);
              onConfirm();
            }}
          >
            {confirmText}
          </Button>
          <Button
            style={{ width: '80%' }}
            onPress={() => setVisible(false)}
            dark
          >
            CANCELAR
          </Button>
        </View>
      </View>
    )
  );
};

export default ConfirmationModal;
