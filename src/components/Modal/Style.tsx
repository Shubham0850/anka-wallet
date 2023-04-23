import {Text, View} from 'native-base';
import {colors} from '../../utils/colors';

// @ts-ignore
import styled from 'styled-components/native';

export const ButtonWrapper = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
`;

export const QrContainer = styled(View)`
    flex: 1;
    background-color: white;
    padding: 25px;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const QrLabel = styled(View)`
    padding: 10px;
`
export const LogoWrapper = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
`

export const CancelBox = styled(View)`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
`