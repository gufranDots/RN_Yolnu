import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { WebPhoneFrame } from './src/components/layout/WebPhoneFrame';
import { DemoProvider } from './src/context/DemoContext';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <DemoProvider>
      <StatusBar style="dark" />
      <WebPhoneFrame>
        <RootNavigator />
      </WebPhoneFrame>
    </DemoProvider>
  );
}
