import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Screen } from '../../components/ui/Screen';
import { useDemo } from '../../context/DemoContext';
import { AuthRoutes } from '../../navigation/routes';
import { colors, spacing, typography } from '../../theme/tokens';

export function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useDemo();
  const [email, setEmail] = useState('sample.user@example.com');
  const [password, setPassword] = useState('password123');

  return (
    <Screen
      title="Login"
      brand="YOLNU CARD MANAGEMENT SYSTEM"
      subtitle="Enter credentials to continue into the mobile demo."
    >
      <Card>
        <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
        <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Pressable
          onPress={() => navigation.navigate(AuthRoutes.ForgotPassword)}
          style={styles.forgotWrap}
        >
          <Text style={styles.link}>Forgot password?</Text>
        </Pressable>
        <View style={styles.loginWrap}>
          <Button title="Login" compact centered onPress={login} />
        </View>
      </Card>
      <View style={styles.signUpWrap}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate(AuthRoutes.SignUp)}>
          <Text style={styles.signUpLink}>Sign up</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  forgotWrap: {
    alignSelf: 'flex-end',
  },
  link: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
  loginWrap: {
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  signUpWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: spacing.sm,
  },
  signUpText: {
    color: colors.textMuted,
    ...typography.body,
  },
  signUpLink: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
});
