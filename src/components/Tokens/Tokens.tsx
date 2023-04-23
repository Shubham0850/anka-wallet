import React from 'react';
import {
  Container,
  DetailBox,
  ListItem,
  ListWrapper,
  Logo,
  Name,
  Price,
  PriceChange,
  PriceChangeBox,
  Title,
} from './Styles';
import {Box, FlatList} from 'native-base';

const Tokens = () => {
  const data = [
    {
      id: 1,
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      name: 'Bitcoin',
      price: '₹ 54,876.83',
      change: '20',
    },
    {
      id: 2,
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      name: 'Ethereum',
      price: '₹ 2,388.67',
      change: '-2.3',
    },
    {
      id: 3,
      logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
      name: 'Binance Coin',
      price: '₹ 618.92',
      change: '12',
    },
    {
      id: 4,
      logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
      name: 'Cardano',
      price: '₹ 1.27',
      change: '-3.4',
    },
  ];

  // @ts-ignore ( props type check )
  const renderItem = ({item, index}: any) => {
    return (
      <ListItem>
        <Box width={50}>
          <Logo source={{uri: item.logo}} alt="crypto logo" />
        </Box>
        <DetailBox>
          <Name>{item.name}</Name>
          <Price>{item.price}</Price>
        </DetailBox>
        <PriceChangeBox>
          <PriceChange>{item.change}%</PriceChange>
        </PriceChangeBox>
      </ListItem>
    );
  };

  return (
    <Container>
      <Title>Tokens</Title>
      <ListWrapper data={data} renderItem={renderItem} />
    </Container>
  );
};

export default Tokens;
