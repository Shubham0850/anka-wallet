import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import {
  ButtonWrapper,
  CancelBox,
  LogoWrapper,
  QrContainer,
  QrLabel,
} from './Style';
import {Box, Button, Image, Text} from 'native-base';

import {QRCode} from 'react-native-custom-qr-codes';
import Icon from 'react-native-vector-icons/Ionicons';

import {formateAddress} from '../../utils/cryptoUtils';
import {WALLET_ADDRESS} from '../Card/Card';
import ModalWrapper from './ModalWrapper';

const QrCodeModal = ({visible, onRequestClose}: any) => {

  return (
    <ModalWrapper visible={visible} onRequestClose={onRequestClose}>
      <QrContainer>
        <CancelBox>
          <TouchableOpacity onPress={onRequestClose}>
            <Text fontSize={18}>Cancel</Text>
          </TouchableOpacity>
        </CancelBox>
        <Text> </Text>
        <Box>
          <Text
            textAlign={'center'}
            color={'#383838'}
            fontWeight={'bold'}
            fontSize={20}
            marginBottom={10}>
            Shubham Raj
          </Text>
          <QRCode
            codeStyle="dot"
            outerEyeStyle="circle"
            logo={require('../../assets/logo-icon-dark.png')}
            content="https://reactnative.com"
          />
          <QrLabel>
            <Text
              textAlign={'center'}
              color={'#383838'}
              fontWeight={'bold'}
              fontSize={20}>
              {formateAddress(WALLET_ADDRESS)}
            </Text>
            <Text textAlign={'center'} color={'#5c5c5c'} fontWeight={'bold'}>
              Scan this code to pay me
            </Text>
          </QrLabel>
        </Box>
        <Box>
          <ButtonWrapper>
            <Button
              size={'sm'}
              variant="outline"
              borderColor={'black'}
              leftIcon={<Icon name="ios-scan" style={{fontSize: 20}} />}
              marginRight={2}>
              Open scanner
            </Button>
            <Button
              size={'sm'}
              leftIcon={<Icon name="ios-copy-outline" style={{fontSize: 20}} />}
              variant="outline"
              borderColor={'black'}>
              Copy address
            </Button>
          </ButtonWrapper>
          <Box marginTop={5} marginBottom={5}>
            <Text textAlign={'center'} color={'#888'}>
              Powered by
            </Text>
            <LogoWrapper>
              <Image
                source={require('../../assets/flat-dark-logo.png')}
                alt="solan pay"
                style={{width: 180, height: 30, marginRight: 20}}
              />
              <Image
                source={require('../../assets/s-pay.png')}
                alt="solan pay"
                style={{width: 80, height: 30}}
              />
            </LogoWrapper>
          </Box>
        </Box>
      </QrContainer>
    </ModalWrapper>
  );
};

export default QrCodeModal;
