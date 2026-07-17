import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { ResetPasswordScreen } from '../screens/auth/ResetPasswordScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';
import { VerifyEmailScreen } from '../screens/auth/VerifyEmailScreen';
import { OnboardingScreen } from '../screens/onboarding/OnboardingScreen';
import { useDemo } from '../context/DemoContext';
import { AuthRoutes } from './routes';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  const { hasCompletedOnboarding } = useDemo();

  return (
    <Stack.Navigator
      initialRouteName={
        hasCompletedOnboarding ? AuthRoutes.Login : AuthRoutes.Onboarding
      }
      screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
    >
      <Stack.Screen name={AuthRoutes.Onboarding} component={OnboardingScreen} />
      <Stack.Screen name={AuthRoutes.Login} component={LoginScreen} />
      <Stack.Screen name={AuthRoutes.SignUp} component={SignUpScreen} />
      <Stack.Screen name={AuthRoutes.VerifyEmail} component={VerifyEmailScreen} />
      <Stack.Screen name={AuthRoutes.ForgotPassword} component={ForgotPasswordScreen} />
      <Stack.Screen name={AuthRoutes.ResetPassword} component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
