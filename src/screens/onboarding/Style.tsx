import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${windowHeight - 95}px;
  padding: 25px;
`;

export const ImageBox = styled.View`
    width: 100%;
`

export const ButtonWrapper = styled.View`
width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`