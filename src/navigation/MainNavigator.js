import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApplicationStatusScreen } from '../screens/flow/ApplicationStatusScreen';
import { ChangePasswordScreen } from '../screens/flow/ChangePasswordScreen';
import { SubmitApplicationScreen } from '../screens/flow/SubmitApplicationScreen';
import { UploadDocumentsScreen } from '../screens/flow/UploadDocumentsScreen';
import { MainTabs } from './MainTabs';
import { MainRoutes } from './routes';

const Stack = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name={MainRoutes.MainTabs} component={MainTabs} />
      <Stack.Screen name={MainRoutes.ChangePassword} component={ChangePasswordScreen} />
      <Stack.Screen name={MainRoutes.UploadDocuments} component={UploadDocumentsScreen} />
      <Stack.Screen name={MainRoutes.SubmitApplication} component={SubmitApplicationScreen} />
      <Stack.Screen name={MainRoutes.ApplicationStatus} component={ApplicationStatusScreen} />
    </Stack.Navigator>
  );
}
