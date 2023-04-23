import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import Navigation from './navigation';
import Home from './screens/Home';
import Intro from './screens/Onboarding/Intro';
import Welcome from './screens/Onboarding/Welcome';
import WalletSetup from './screens/Onboarding/WalletSetup';
import CreateWallet from './screens/Onboarding/CreateWallet';
import GeneratePhrase from './screens/Onboarding/GeneratePhrase';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#E0E0E0',
      100: '#B3B3B3',
      200: '#808080',
      300: '#4D4D4D',
      400: '#1A1A1A',
      500: '#000000',
      600: '#000000',
      700: '#000000',
      800: '#000000',
      900: '#000000',
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
  fontConfig: {
    100: {
      normal: 'Euclid Circular B Light',
      italic: 'Euclid Circular B Light Italic',
    },
    200: {
      normal: 'Euclid Circular B Light',
      italic: 'Euclid Circular B Light Italic',
    },
    300: {
      normal: 'Euclid Circular B Light',
      italic: 'Euclid Circular B Light Italic',
    },
    400: {
      normal: 'Euclid Circular B Medium',
      italic: 'Euclid Circular B Medium Italic',
    },
    500: {
      normal: 'Euclid Circular B Medium',
      italic: 'Euclid Circular B Medium Italic',
    },
    600: {
      normal: 'Euclid Circular B Bold',
      italic: 'Euclid Circular B Bold Italic',
    },
  },
  fonts: {
    heading: 'Euclid Circular B Bold',
    body: 'Euclid Circular B',
    mono: 'Euclid Circular B',
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 50,
      },
      defaultProps: {
        size: 'lg',
        paddingBottom: 4,
        paddingTop: 4,
        paddingRight: 10,
        paddingLeft: 10,
      },
    },
  },
});

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
      <Navigation />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;
