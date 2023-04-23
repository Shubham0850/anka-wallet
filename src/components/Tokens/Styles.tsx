import {FlatList, Image, Text, View} from 'native-base';

// @ts-ignore
import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled(View)`
  padding: 20px;
`;

export const ListItem = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
border-bottom-width: 1px;
    border-bottom-color: ${colors.grey};
  padding: 15px 10px;
  
`;

export const ListWrapper = styled(FlatList)`
  border: 1px solid ${colors.grey};
  border-radius: 20px;

  &:not(:last-child) {
    /* Add your styles here */
    
    background-color: red;
  }
`;

export const DetailBox = styled(View)`
  flex: 1;
`;

export const Logo = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export const Name = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Price = styled(Text)`
  font-size: 14px;
  color: #666;
`;

export const Title = styled(Text)`
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const PriceChangeBox = styled(View)`
  background-color: #46b346;
  color: white;
  padding: 2px 10px;
  border-radius: 10px;
`;

export const PriceChange = styled(Text)`
  color: white;
  font-size: 14px;
`;
