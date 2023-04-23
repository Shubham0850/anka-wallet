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
const WalletSetup = ({navigation}) => {
  return (
    <ScreenWrapper>
      <Container>
        <ImageBox>
          <Image
            source={require('../../assets/logo-icon-dark.png')}
            alt="logo"
          />
        </ImageBox>
        <Box>
          <BoldTitle>Wallet setup</BoldTitle>
          <IntroText>Import an existing wallet or create a new one.</IntroText>
        </Box>
        <ButtonWrapper>
          <Button size={'lg'} marginRight={2}>
            Use existing
          </Button>
          <Button size={'lg'} variant="outline" borderColor={'black'}  onPress={() => navigation.navigate('CreateWallet')}>
            Create new
          </Button>
        </ButtonWrapper>
      </Container>
    </ScreenWrapper>
  );
};

export default WalletSetup;
