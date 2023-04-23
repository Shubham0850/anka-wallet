import React, {useState} from 'react';
import {Container, IconContainer, IconTitle} from './Style';

// @ts-ignore
import IonIcon from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import QrScanModal from '../Modal/QrScanModal';
import {TouchableOpacity} from 'react-native';
import MoreModal from '../Modal/MoreModal';

const buttonStyle = {
  fontSize: 32,
  lineHeight: 32,
  color: '#000',
};

const ActionButtons = () => {
  const [scanModalVisible, setScanModalVisible] = useState(false);
  const [moreModalVisible, setMoreModalVisible] = useState(false);

  return (
    <>
      <Container>
        <IconContainer>
          <TouchableOpacity
            onPress={() => {
              setScanModalVisible(true);
            }}>
            <IonIcon name="scan" style={buttonStyle} />
            <IconTitle>Scan</IconTitle>
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => {
              setMoreModalVisible(true);
            }}>
            <IonIcon name="apps" style={buttonStyle} />
            <IconTitle>More</IconTitle>
          </TouchableOpacity>
        </IconContainer>
      </Container>

      {/* Modals */}
      <QrScanModal
        visible={scanModalVisible}
        onRequestClose={() => {
          setScanModalVisible(false);
        }}
      />

      <MoreModal
        visible={moreModalVisible}
        onRequestClose={() => {
          setMoreModalVisible(false);
        }}
      />
    </>
  );
};

export default ActionButtons;
