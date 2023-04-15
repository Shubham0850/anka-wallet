import React from 'react';
import {
    CardAmount,
  CardExpiration,
  CardFooter,
  CardHeader,
  CardLogo,
  CardName,
  CardNumber,
  CreditCardContainer,
} from './Style';
import {formateAddress} from '../../utils/cryptoUtils';
import {Box, Image} from 'native-base';


const WALLET_ADDRESS = 'F4GyxqdGGQf7pw223cUjqhw5miQwVC5e9rjExt2SrHK2';

const WalletCard = () => {
  return (
    <CreditCardContainer>
      <CardHeader>
        <CardAmount>
        ₹ 12,534.00
        </CardAmount>
        

      </CardHeader>
      <CardFooter>
        <Box>
        <CardName>Shubham Raj</CardName>
        <CardNumber>{formateAddress(WALLET_ADDRESS)}</CardNumber>
        </Box>

        <CardLogo>
          <Image
            source={require('../../assets/logo-icon-dark.png')}
            width={'100%'}
            height={'100%'}
            alt="logo"
          />
        </CardLogo>
      </CardFooter>
    </CreditCardContainer>
  );
};

export default WalletCard;
