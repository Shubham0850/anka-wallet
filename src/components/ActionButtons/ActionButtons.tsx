import React from 'react';
import {Container, IconContainer, IconTitle} from './Style';

// @ts-ignore
import IonIcon from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActionButtons = () => {
  const buttonStyle = {
    fontSize: 32,
    lineHeight: 32,
    color: '#000',
  };
  return (
    <>
      <Container>
        <IconContainer>
          <IonIcon name="scan" style={buttonStyle} />
          <IconTitle>Scan</IconTitle>
        </IconContainer>
        <IconContainer>
          <IonIcon name="card" style={buttonStyle} />
          <IconTitle>Buy</IconTitle>
        </IconContainer>
        <IconContainer>
          <MaterialIcon name="swap-horizontal-circle" style={buttonStyle} />
          <IconTitle>Swap</IconTitle>
        </IconContainer>
        <IconContainer>
          <MaterialIcon name="history" style={buttonStyle} />
          <IconTitle>History</IconTitle>
        </IconContainer>
      </Container>
      <Container>
        <IconContainer>
          <MaterialIcon name="bank" style={buttonStyle} />
          <IconTitle>Transfer</IconTitle>
        </IconContainer>
        <IconContainer>
          <IonIcon name="document-text" style={buttonStyle} />
          <IconTitle>Pay Bills</IconTitle>
        </IconContainer>
        <IconContainer>
          <IonIcon name="phone-portrait" style={buttonStyle} />
          <IconTitle>Recharge</IconTitle>
        </IconContainer>
        <IconContainer>
          <IonIcon name="apps" style={buttonStyle} />
          <IconTitle>More</IconTitle>
        </IconContainer>
      </Container>
    </>
  );
};

export default ActionButtons;
