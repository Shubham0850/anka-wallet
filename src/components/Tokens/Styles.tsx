import {Image, Text, View} from 'native-base';

// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled(View)`
  padding: 20px;
`;

export const ListItem = styled(View)`
  width: 100%;
  height: 65;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 0 10px;
`;

export const Logo = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
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
