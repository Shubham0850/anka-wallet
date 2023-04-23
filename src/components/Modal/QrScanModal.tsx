import React from 'react';
import {
  ButtonWrapper,
  LogoWrapper,
  QrContainer,
} from './Style';
import {Box, Button, Image, Text} from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';
import ModalWrapper from './ModalWrapper';

const QrScanModal = ({visible, onRequestClose}: any) => {
  return (
    <ModalWrapper visible={visible} onRequestClose={onRequestClose}>
      <QrContainer>
        <Text> </Text>
        <Box>
          <Text textAlign={'center'} color={'#5c5c5c'} fontWeight={'bold'}>
            react native camera goes here
          </Text>
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

export default QrScanModal;
