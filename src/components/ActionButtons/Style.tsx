import {Text, View} from 'native-base';

// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const IconContainer = styled(View)`
  align-items: center;
  width: 25%;
`;

export const IconTitle = styled(Text)`
  font-size: 14px;
  color: #333;
  margin-top: 5px;

  text-align: center;
`;
