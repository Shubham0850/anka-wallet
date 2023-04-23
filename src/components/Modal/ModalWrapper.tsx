import React, {useRef} from 'react';
import {
  TouchableOpacity,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import {CancelBox} from './Style';
import {Text} from 'native-base';

const ModalWrapper = ({visible, onRequestClose, children}: any) => {
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;

  const openModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onRequestClose());
  };

  React.useEffect(() => {
    if (visible) {
      openModal();
    } else {
      closeModal();
    }
  }, [visible]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      presentationStyle="pageSheet"
      visible={visible}
      onRequestClose={closeModal}>
      <Animated.View
        style={[styles.modalContainer, {transform: [{translateY: slideAnim}]}]}>
        <CancelBox>
          <TouchableOpacity onPress={onRequestClose}>
            <Text fontSize={18}>Cancel</Text>
          </TouchableOpacity>
        </CancelBox>
        {children}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});

export default ModalWrapper;
