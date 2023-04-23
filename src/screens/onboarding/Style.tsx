import {Text, View} from 'native-base';
import {Dimensions} from 'react-native';

// @ts-ignore
import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

const windowHeight = Dimensions.get('window').height;

export const Container = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${windowHeight - 95}px;
  padding: 25px;
`;

export const ImageBox = styled(View)`
  width: 100%;
`;

export const LightTitle = styled(Text)`
  font-size: 40px;
  line-height: 42px;
`;

export const BoldTitle = styled(Text)`
  font-size: 50px;
  line-height: 55px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const IntroText = styled(Text)`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

export const ButtonWrapper = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const PhraseWrapper = styled(View)`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PhraseBox = styled(View)`
  width: 48%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  margin: 5px 0;
`;

export const PhraseText = styled(Text)`
font-size: 18px;
`;
