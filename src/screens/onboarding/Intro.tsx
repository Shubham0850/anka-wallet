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
const Intro = ({navigation}) => {
  return (
    <ScreenWrapper>
      <Container>
        <Box>
          <LightTitle>Not just a</LightTitle>
          <BoldTitle>Crypto Wallet</BoldTitle>
          <IntroText>
            All in one crypto wallet for all your need. We make it safe & easy
            for you to store, buy, send, spend, swap tokens and NFTs.
          </IntroText>
        </Box>
        <ImageBox>
          <Image
            source={require('../../assets/logo-icon-dark.png')}
            alt="logo"
          />
        </ImageBox>
        <ButtonWrapper>
          <Button
            size={'lg'}
            marginRight={2}
            onPress={() => navigation.navigate('Welcome')}>
            Create Wallet
          </Button>
          <Button size={'lg'} variant="outline" borderColor={'black'}>
            Explore
          </Button>
        </ButtonWrapper>
      </Container>
    </ScreenWrapper>
  );
};

export default Intro;
