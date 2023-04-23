import React from 'react';
import NavBar from '../../components/Nav/Nav';
import WalletCard from '../../components/Card/Card';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import Tokens from '../../components/Tokens/Tokens';
import ScreenWrapper from '../../components/Helper/ScreenWrapper';

const Home = ({navigation}) => {
  console.log("navigation: ", navigation)
  return (
    <ScreenWrapper>
      <NavBar navigation={navigation} />
      <WalletCard />
      <ActionButtons />
      <Tokens />
    </ScreenWrapper>
  );
};

export default Home;
