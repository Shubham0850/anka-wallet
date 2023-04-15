import React from 'react';
import {Container, LogoImage, UserIcon} from './Styles';

const NavBar = () => {
  return (
    <Container>
      <LogoImage
        source={require('../../assets/anka-pay-dark.png')}
        alt="anka pay logo"
      />
      <UserIcon source={require('../../assets/shubham.png')} alt="icon" />
    </Container>
  );
};

export default NavBar;
