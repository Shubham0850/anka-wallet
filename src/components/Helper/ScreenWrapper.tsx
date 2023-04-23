import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

// @ts-ignore ( Check how to add type to screen props having navigation prop )
const ScreenWrapper = ({children, style}: any) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingRight: insets.right,
        backgroundColor: '#fff',
      }}>
      <ScrollView
        contentContainerStyle={[
          {
            flexGrow: 1,
          },
          style,
        ]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
