import {Box, Button, Image} from 'native-base';
import React from 'react';
import {
  BoldTitle,
  ButtonWrapper,
  Container,
  ImageBox,
  IntroText,
  LightTitle,
} from './Style';
import ScreenWrapper from '../../components/Helper/ScreenWrapper';

// @ts-ignore ( Check how to add type to screen props having navigation prop )
const Welcome = ({navigation}) => {
  return (
    <ScreenWrapper>
      <Container>
        <Box>
          <LightTitle>Welcome to</LightTitle>
          <BoldTitle>Anka Wallet</BoldTitle>
          <IntroText>
            Trusted by people, Antra wallet is a secure wallet making the
            Decentralised payments accessible to all.
          </IntroText>
        </Box>
        <ImageBox>
          <Image source={require('../../assets/easy-to-use.png')} alt="logo" />
        </ImageBox>
        <ButtonWrapper>
          <Button size={'lg'}  onPress={() => navigation.navigate('WalletSetup')}>Get Started</Button>
        </ButtonWrapper>
      </Container>
    </ScreenWrapper>
  );
};

export default Welcome;
