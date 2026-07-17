import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { useDemo } from '../context/DemoContext';
import { colors } from '../theme/tokens';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';

export function RootNavigator() {
  const { isAppReady, isLoggedIn } = useDemo();

  if (!isAppReady) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.primaryDark} size="large" />
      </View>
    );
  }

  return <NavigationContainer>{isLoggedIn ? <MainNavigator /> : <AuthNavigator />}</NavigationContainer>;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
