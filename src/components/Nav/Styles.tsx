import {Image, View} from 'native-base';

// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px 20px;
`;

export const UserIcon = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

export const LogoImage = styled.Image`
  width: 145px;
  height: 30px;
`;
