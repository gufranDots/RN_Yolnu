import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
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
  // Web phone-frame has no OS home-indicator inset; keep enough room for icon + label.
  const tabBarHeight = Platform.OS === 'web' ? 84 : 70 + insets.bottom;
  const bottomPad = Platform.OS === 'web' ? 14 : Math.max(insets.bottom, spacing.xs);

  return (
    <View style={styles.root}>
      <Tab.Navigator
        initialRouteName={TabRoutes.ApplyRenew}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          // Desktop web reports a wide window; without this, labels sit beside icons and clip in the phone frame.
          tabBarLabelPosition: 'below-icon',
          tabBarActiveTintColor: colors.primaryDark,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: tabBarHeight,
            paddingTop: 8,
            paddingBottom: bottomPad,
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            borderTopWidth: 1,
            overflow: 'visible',
          },
          tabBarLabelStyle: {
            fontSize: 11,
            lineHeight: 14,
            fontWeight: '600',
            marginTop: 4,
          },
          tabBarIconStyle: {
            marginTop: 0,
          },
          tabBarItemStyle: {
            justifyContent: 'center',
            paddingTop: 4,
            paddingBottom: 2,
          },
        }}
      >
        <Tab.Screen
          name={TabRoutes.ApplyRenew}
          component={ApplyRenewScreen}
          options={{
            title: 'Apply / Renew',
            tabBarLabel: 'Apply / Renew',
            tabBarIcon: ({ color, size }) => <Feather name="file-text" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name={TabRoutes.ViewCard}
          component={ViewCardScreen}
          options={{
            title: 'View Card',
            tabBarLabel: 'Card',
            tabBarIcon: ({ color, size }) => <Feather name="credit-card" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name={TabRoutes.Messages}
          component={MessagesScreen}
          options={{
            title: 'Messages',
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color, size }) => <Feather name="message-circle" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name={TabRoutes.Profile}
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarLabel: 'Profile',
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
  },
});

