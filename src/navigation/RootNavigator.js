import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useDemo } from '../context/DemoContext';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';

export function RootNavigator() {
  const { isLoggedIn } = useDemo();

  return <NavigationContainer>{isLoggedIn ? <MainNavigator /> : <AuthNavigator />}</NavigationContainer>;
}
