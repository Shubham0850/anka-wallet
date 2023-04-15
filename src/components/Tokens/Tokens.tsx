import React from 'react';
import {View} from 'react-native';
import {Container, ListItem, Logo, Name, Price, Title} from './Styles';

const Tokens = () => {
  const data = [
    {
      id: 1,
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      name: 'Bitcoin',
      price: '₹ 54,876.83',
    },
    {
      id: 2,
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      name: 'Ethereum',
      price: '₹ 2,388.67',
    },
    {
      id: 3,
      logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
      name: 'Binance Coin',
      price: '₹ 618.92',
    },
    {
      id: 4,
      logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
      name: 'Cardano',
      price: '₹ 1.27',
    },
  ];

  return (
    <Container>
      <Title>Tokens</Title>
      {data.map(item => (
        <ListItem key={item.id}>
          <Logo source={{uri: item.logo}} alt="icons" />
          <View>
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
          </View>
        </ListItem>
      ))}
    </Container>
  );
};

export default Tokens;
