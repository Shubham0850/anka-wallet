import React from 'react';
import { QrContainer} from './Style';
import {Box, Text} from 'native-base';

import ModalWrapper from './ModalWrapper';

const MoreModal = ({visible, onRequestClose}: any) => {
  return (
    <ModalWrapper visible={visible} onRequestClose={onRequestClose}>
      <QrContainer>
        <Text> </Text>
        <Box>
          <Text textAlign={'center'} color={'#5c5c5c'} fontWeight={'bold'}>
            More features goes here
          </Text>
        </Box>
      </QrContainer>
    </ModalWrapper>
  );
};

export default MoreModal;
