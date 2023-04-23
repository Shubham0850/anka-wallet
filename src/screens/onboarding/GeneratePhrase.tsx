import {Box, Button} from 'native-base';
import React from 'react';
import {
  BoldTitle,
  ButtonWrapper,
  Container,
  IntroText,
  LightTitle,
  PhraseBox,
  PhraseText,
  PhraseWrapper,
} from './Style';
import ScreenWrapper from '../../components/Helper/ScreenWrapper';
import {CommonActions} from '@react-navigation/native';

// @ts-ignore ( Check how to add type to screen props having navigation prop )
const GeneratePhrase = ({navigation}) => {
  const phraseArray = [
    'rent',
    'october',
    'produce',
    'small',
    'ethics',
    'usual',
    'cup',
    'artist',
    'donate',
    'sort',
    'open',
    'pelican',
  ];

  const handleCreateWallet = () => {
    // Perform your login logic here

    // After a successful login, reset the navigation stack and navigate to the home screen
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <ScreenWrapper>
      <Container>
        <Box>
          <LightTitle>Secure your </LightTitle>
          <BoldTitle>Anka Wallet</BoldTitle>
          <IntroText>
            Once you have stored this phrase somewhere safe, click 'Create
            wallet' to go to your wallet.
          </IntroText>
        </Box>
        <PhraseWrapper>
          {phraseArray.map(phrase => (
            <PhraseBox>
              <PhraseText>{phrase}</PhraseText>
            </PhraseBox>
          ))}
        </PhraseWrapper>
        <ButtonWrapper>
          <Button size={'lg'} marginRight={2}>
            Copy phrase
          </Button>
          <Button
            size={'lg'}
            variant="outline"
            borderColor={'black'}
            onPress={handleCreateWallet}>
            Create wallet
          </Button>
        </ButtonWrapper>
      </Container>
    </ScreenWrapper>
  );
};

export default GeneratePhrase;
