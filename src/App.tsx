import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import {OnboardingScreen1} from './screens/onboarding/Onbarding';
import {Box, NativeBaseProvider, ScrollView, extendTheme} from 'native-base';
import WalletCard from './components/Card/Card';
import ActionButtons from './components/ActionButtons/ActionButtons';
import Tokens from './components/Tokens/Tokens';
import NavBar from './components/Nav/Nav';

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
        50: "#E0E0E0",
        100: "#B3B3B3",
        200: "#808080",
        300: "#4D4D4D",
        400: "#1A1A1A",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",  
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
        paddingLeft: 10
      },
    },
  },
});

export default function App() {
  const backgroundStyle = {
    backgroundColor: '#fff',
  };

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
          {/* <OnboardingScreen1 /> */}
          <ScrollView >
            <NavBar/>
          <WalletCard/>
          <ActionButtons/>
          <Tokens/>
          </ScrollView>
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
