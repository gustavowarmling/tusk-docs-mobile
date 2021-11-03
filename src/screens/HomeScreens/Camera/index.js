import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, PermissionsAndroid } from 'react-native';

import { CameraKitCameraScreen } from 'react-native-camera-kit';
import { Svg, Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useAuth } from '../../../hooks/auth';
import { usePasses } from '../../../hooks/passes';
import http from '../../../services/http';

const requestCameraPermission = async () => {
  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
    title: 'Permissão Camera',
    message:
      'É necessário liberar o acesso à câmera para podermos escanear o código QR',
    buttonNeutral: 'Cancelar',
    buttonNegative: 'Negar',
    buttonPositive: 'Permitir',
  });
};

const Camera = ({ route }) => {
  const { setUsedPassCode } = usePasses();
  const navigation = useNavigation();
  const { token } = useAuth();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!route.params?.passId) {
      navigation.navigate('Home');
    }

    if (!visible) {
      navigation.navigate('Home');
    }

    setVisible(true);

    async function verifyCameraAccess() {
      if (PermissionsAndroid.check('android.permission.CAMERA') !== 'granted') {
        await requestCameraPermission();
      }
    }

    verifyCameraAccess();
  }, []);

  const onReadCode = async event => {
    const busUuid = event.nativeEvent.codeStringValue;

    if (!busUuid) {
      return;
    }

    setVisible(false);

    try {
      const response = await http.post(
        'passes/validate',
        {
          busUuid,
          passId: route.params?.passId,
          validatorId: 0,
          validatedAt: '2021-03-21T13:09:59.419Z',
          receivedAt: '2021-03-21T13:09:59.419Z',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      await setUsedPassCode(response.data);
      navigation.navigate('PassConfirmation');
    } catch (e) {
      setVisible(true);
    }
  };

  return (
    <>
      {visible && (
        <>
          <View
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              zIndex: 999,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Svg
              style={{ position: 'absolute' }}
              width="100%"
              height="100%"
              viewBox="0 0 360 697"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M362 0H-1v697h363V0zM112 207c-5.523 0-10 4.477-10 10v138c0 5.523 4.477 10 10 10h136c5.523 0 10-4.477 10-10V217c0-5.523-4.477-10-10-10H112z"
                fill="#111"
                fillOpacity={0.7}
              />
            </Svg>
            <Text style={{ color: '#fff', top: -200, textAlign: 'center' }}>
              {`Enquadre o QR Code que está\nlocalizado próximo do cobrador`}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFFFFF4D',
                height: 48,
                top: 48,
                bottom: -48,
                alignItems: 'center',
                justifyContent: 'center',
                width: 200,
                marginHorizontal: 60,
                borderRadius: 24,
              }}
            >
              <Text style={{ color: '#fff' }}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
          <CameraKitCameraScreen scanBarcode onReadCode={onReadCode} />
        </>
      )}
    </>
  );
};

export default Camera;
