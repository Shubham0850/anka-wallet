import {Box, Button, Flex, Image, ScrollView, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import * as WebBrowser from '@toruslabs/react-native-web-browser';
import Web3Auth, {
  LOGIN_PROVIDER,
  LOGIN_PROVIDER_TYPE,
  LoginParams,
  OPENLOGIN_NETWORK,
} from '@web3auth/react-native-sdk';
import {FaHeart} from 'react-icons/fa';
import {ButtonWrapper, Container, ImageBox} from './Style';

const scheme = 'web3authrnbareauth0example'; // Or your desired app redirection scheme
const resolvedRedirectUrl = `${scheme}://openlogin`;

const clientId =
  'BDcf0j7yAVTSKh9ux49CCeoJyfJuPpbdDNp37i6Lz3WAfeTm15UgSazVG7IhifYPEy1_u9FlSmDm78lI1Ryxeoc';

const windowHeight = Dimensions.get('window').height;

const OnboardingScreen1 = ({navigation}) => {
  const [key, setKey] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [console, setConsole] = useState('');

  const login = async () => {
    try {
      setConsole('Logging in');
      const web3auth = new Web3Auth(WebBrowser, {
        clientId,
        network: OPENLOGIN_NETWORK.CYAN, // or other networks
      });
      const info = await web3auth.login({
        loginProvider: LOGIN_PROVIDER.GOOGLE,
        redirectUrl: resolvedRedirectUrl,
        mfaLevel: 'default',
        curve: 'secp256k1',
      });

      setUserInfo(info);
      setKey(info.privKey);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScrollView>
      <Container>
        <ImageBox>
          <Image
            source={require('../../assets/logo-icon-dark.png')}
            style={styles.image}
            alt="logo"
          />
        </ImageBox>
        <Box>
          <Text fontSize={40} lineHeight={42}>
            Not just a
          </Text>
          <Text
            fontSize={50}
            lineHeight={55}
            marginBottom={10}
            fontWeight={'bold'}>
            Crypto Wallet
          </Text>
          <Text style={styles.subtitle}>
            All in one crypto wallet for all your need. We make it safe & easy
            for you to store, buy, send, spend, swap tokens and NFTs.
          </Text>
        </Box>
        <ButtonWrapper>
          <Button size={'lg'} marginRight={2}>Create Wallet</Button>
          <Button size={'lg'} variant="outline" borderColor={'black'}>
            Explore
          </Button>
        </ButtonWrapper>
      </Container>
    </ScrollView>
  );
};

const OnboardingScreen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/squre-white-logo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Discover new features</Text>
      <Text style={styles.subtitle}>This is the second onboarding screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Onboarding3')}
        style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const OnboardingScreen3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/squre-white-logo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Get started now</Text>
      <Text style={styles.subtitle}>This is the third onboarding screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight - 88,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  imageBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'left',
    color: '#000',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export {OnboardingScreen1, OnboardingScreen2, OnboardingScreen3};
