import React from 'react';
import {Container, LogoImage, UserIcon} from './Styles';
import {TouchableOpacity} from 'react-native';

const NavBar = ({navigation}) => {
  return (
    <Container>
      <LogoImage
        source={require('../../assets/flat-dark-logo.png')}
        alt="anka pay logo"
      />
      <TouchableOpacity   onPress={() => navigation.navigate('Profile')}>
        <UserIcon source={require('../../assets/shubham.png')} alt="icon" />
      </TouchableOpacity>
    </Container>
  );
};

export default NavBar;
