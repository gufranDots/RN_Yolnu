import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { DemoProvider } from './src/context/DemoContext';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <DemoProvider>
      <StatusBar style="dark" />
      <RootNavigator />
    </DemoProvider>
  );
}
