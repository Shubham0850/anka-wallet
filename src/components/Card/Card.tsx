import React, {useState} from 'react';
import {
  BgImage,
  CardAmount,
  CardFooter,
  CardHeader,
  CardName,
  CardNumber,
  Container,
  CreditCardContainer,
} from './Style';
import {formateAddress} from '../../utils/cryptoUtils';
import {Box} from 'native-base';
import {Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import QrCodeModal from '../Modal/QrCodeModal';

export const WALLET_ADDRESS = 'F4GyxqdGGQf7pw223cUjqhw5miQwVC5e9rjExt2SrHK2';

const WalletCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Container>
        <CreditCardContainer>
          <CardHeader>
            <CardAmount>₹ 12,534.00</CardAmount>

            <Icon name="eye" style={{fontSize: 25, lineHeight: 25}} />
          </CardHeader>
          <CardFooter>
            <Box>
              <CardName>Shubham Raj</CardName>
              <CardNumber>{formateAddress(WALLET_ADDRESS)}</CardNumber>
            </Box>

            <TouchableOpacity onPress={openModal}>
              <AntIcon name="qrcode" style={{fontSize: 35, lineHeight: 35}} />
            </TouchableOpacity>
          </CardFooter>
          <BgImage>
            <Image
              source={require('../../assets/logo-icon-dark.png')}
              style={{width: '100%', height: 200}}
            />
          </BgImage>
        </CreditCardContainer>
      </Container>
      <QrCodeModal visible={modalVisible} onRequestClose={closeModal} />
    </>
  );
};

export default WalletCard;
