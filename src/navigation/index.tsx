// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Intro from '../screens/Onboarding/Intro';
import Welcome from '../screens/Onboarding/Welcome';
import WalletSetup from '../screens/Onboarding/WalletSetup';
import GeneratePhrase from '../screens/Onboarding/GeneratePhrase';
import CreateWallet from '../screens/Onboarding/CreateWallet';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Onboarding screen routes */}
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WalletSetup"
          component={WalletSetup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateWallet"
          component={CreateWallet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GeneratePhrase"
          component={GeneratePhrase}
          options={{headerShown: false}}
        />
        {/* ------------------------ */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
