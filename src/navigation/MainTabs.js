import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DemoControls } from '../components/layout/DemoControls';
import { ApplyRenewScreen } from '../screens/main/ApplyRenewScreen';
import { MessagesScreen } from '../screens/main/MessagesScreen';
import { ProfileScreen } from '../screens/main/ProfileScreen';
import { ViewCardScreen } from '../screens/main/ViewCardScreen';
import { colors, spacing } from '../theme/tokens';
import { TabRoutes } from './routes';

const Tab = createBottomTabNavigator();

export function MainTabs() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <Tab.Navigator
        initialRouteName={TabRoutes.ApplyRenew}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primaryDark,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 60 + insets.bottom,
            paddingTop: spacing.xs,
            paddingBottom: Math.max(insets.bottom, spacing.xs),
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            borderTopWidth: 1,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 2,
          },
          tabBarItemStyle: {
            paddingVertical: 4,
          },
        }}
      >
        <Tab.Screen
          name={TabRoutes.ApplyRenew}
          component={ApplyRenewScreen}
          options={{
            title: 'Apply / Renew',
            tabBarIcon: ({ color, size }) => <Feather name="file-text" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name={TabRoutes.ViewCard}
          component={ViewCardScreen}
          options={{
            title: 'View Card',
            tabBarIcon: ({ color, size }) => <Feather name="credit-card" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name={TabRoutes.Messages}
          component={MessagesScreen}
          options={{
            title: 'Messages',
            tabBarIcon: ({ color, size }) => <Feather name="message-circle" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name={TabRoutes.Profile}
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
      <DemoControls />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
});

