import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Expo resolves the native/web implementation at bundle time.
// @ts-expect-error The module intentionally exists only as platform-specific files.
import { CommunityMapScreen } from '../screens/guest/CommunityMapScreen';
import { CulturalCompetencyDetailScreen } from '../screens/guest/CulturalCompetencyDetailScreen';
import { EastArnhemDetailScreen } from '../screens/guest/EastArnhemDetailScreen';
import { GuestHomeScreen } from '../screens/guest/GuestHomeScreen';
import { NewsDetailScreen } from '../screens/guest/NewsDetailScreen';
import { TrainingDetailScreen } from '../screens/guest/TrainingDetailScreen';
// Expo resolves the native/web implementation at bundle time.
// @ts-expect-error The module intentionally exists only as platform-specific files.
import { WebContentScreen } from '../screens/web/WebContentScreen';
import { GuestRoutes } from './routes';

const Stack = createNativeStackNavigator();

export function GuestNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name={GuestRoutes.Home} component={GuestHomeScreen} />
      <Stack.Screen
        name={GuestRoutes.CulturalCompetencyDetail}
        component={CulturalCompetencyDetailScreen}
      />
      <Stack.Screen
        name={GuestRoutes.EastArnhemDetail}
        component={EastArnhemDetailScreen}
      />
      <Stack.Screen name={GuestRoutes.CommunityMap} component={CommunityMapScreen} />
      <Stack.Screen name={GuestRoutes.NewsDetail} component={NewsDetailScreen} />
      <Stack.Screen name={GuestRoutes.TrainingDetail} component={TrainingDetailScreen} />
      <Stack.Screen name={GuestRoutes.WebContent} component={WebContentScreen} />
    </Stack.Navigator>
  );
}
