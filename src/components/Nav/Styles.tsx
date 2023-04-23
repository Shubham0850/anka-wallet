import {Image, View} from 'native-base';

// @ts-ignore
import styled from 'styled-components/native';
import { colors } from '../../utils/colors';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px 20px;
`;

export const UserIcon = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid ${colors.grey};
`;

export const LogoImage = styled.Image`
  width: 300px;
  height: 30px;
`;
