import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { useAuth } from '../context/AuthContext';
import { colors } from '../theme/tokens';
import { AuthNavigator } from './AuthNavigator';
import { GuestNavigator } from './GuestNavigator';
import { MainNavigator } from './MainNavigator';

export function RootNavigator() {
  const { authState, hasSeenOnboarding, isAuthReady } = useAuth();

  if (!isAuthReady) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.primaryDark} size="large" />
      </View>
    );
  }

  let navigator = <AuthNavigator />;
  if (hasSeenOnboarding && authState === 'member') {
    navigator = <MainNavigator />;
  } else if (hasSeenOnboarding && authState === 'guest') {
    navigator = <GuestNavigator />;
  }

  return (
    <NavigationContainer key={`${hasSeenOnboarding}-${authState}`}>
      {navigator}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
