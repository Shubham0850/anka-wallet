import {Box, Button, Image} from 'native-base';
import React from 'react';
import {
  BoldTitle,
  ButtonWrapper,
  Container,
  ImageBox,
  IntroText,
} from './Style';
import ScreenWrapper from '../../components/Helper/ScreenWrapper';

// @ts-ignore ( Check how to add type to screen props having navigation prop )
const CreateWallet = ({navigation}) => {
  return (
    <ScreenWrapper>
      <Container>
        <ImageBox>
          <Image source={require('../../assets/secure.png')} alt="logo" />
        </ImageBox>
        <Box>
          <BoldTitle>Create Wallet</BoldTitle>
          <IntroText>
            Don't risk losing your funds. Protect your wallet by saving your
            secret recovery phrase in a place you trust. It's the only way to
            recover your wallet if you get locked out of the app or get a new
            device.
          </IntroText>
        </Box>

        <ButtonWrapper>
          <Button
            size={'lg'}
            marginRight={2}
            onPress={() => navigation.navigate('GeneratePhrase')}>
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

export default CreateWallet;
