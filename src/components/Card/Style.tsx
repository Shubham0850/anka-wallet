import {Text, View} from 'native-base';
import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const CreditCardContainer = styled(View)`
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); */

  margin: 10px 0;
  border: 1px solid ${colors.grey};
  // remove it letter
`;

export const CardHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardAmount = styled(Text)`
    font-size: 25px;
    line-height: 25px;
    font-weight: bold;
`

export const CardLogo = styled(Text)`
  width: 50px;
  height: 50px;
`;

export const CardNumber = styled(Text)`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: #555;
`;

export const CardFooter = styled(View)`
margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardExpiration = styled(Text)`
  font-size: 16px;
  color: #555;
`;

export const CardName = styled(Text)`
  font-size: 16px;
  color: #555;
`;
