import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Screen } from '../../components/ui/Screen';
import { useAuth } from '../../context/AuthContext';
import { AuthRoutes } from '../../navigation/routes';
import { colors, radius, spacing, typography } from '../../theme/tokens';

type Mode = 'login' | 'signup';
// These shared UI components remain JavaScript while the app is migrated incrementally.
const FormInput = Input as React.ComponentType<any>;
const FormScreen = Screen as React.ComponentType<any>;

export function LoginScreen() {
  const navigation = useNavigation<any>();
  const { continueAsGuest, login, signup } = useAuth();
  const [mode, setMode] = useState<Mode>('login');
  const [name, setName] = useState('Sample User');
  const [email, setEmail] = useState('sample.user@example.com');
  const [password, setPassword] = useState('password123');
  const [confirmPassword, setConfirmPassword] = useState('password123');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const changeMode = (nextMode: Mode) => {
    setMode(nextMode);
    setError('');
  };

  const submit = async () => {
    const normalizedEmail = email.trim();
    if (!normalizedEmail || !password || (mode === 'signup' && !name.trim())) {
      setError('Please complete all required fields.');
      return;
    }
    if (!normalizedEmail.includes('@')) {
      setError('Enter a valid email address.');
      return;
    }
    if (mode === 'signup' && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      if (mode === 'login') {
        await login(normalizedEmail, password);
      } else {
        await signup(name.trim(), normalizedEmail, password);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const skipButton = (
    <Pressable
      accessibilityRole="button"
      hitSlop={10}
      onPress={continueAsGuest}
      style={({ pressed }) => [styles.skipButton, pressed && styles.pressed]}
    >
      <Text style={styles.skipText}>Skip</Text>
    </Pressable>
  );

  return (
    <FormScreen
      title={mode === 'login' ? 'Welcome back' : 'Create account'}
      brand="YOLNU CARD MANAGEMENT SYSTEM"
      subtitle={
        mode === 'login'
          ? 'Log in to access your card, applications and messages.'
          : 'Create your member account to get started.'
      }
      headerRight={skipButton}
    >
      <View accessibilityRole="tablist" style={styles.toggle}>
        {(['login', 'signup'] as const).map((item) => {
          const selected = mode === item;
          return (
            <Pressable
              accessibilityRole="tab"
              accessibilityState={{ selected }}
              key={item}
              onPress={() => changeMode(item)}
              style={[styles.toggleItem, selected && styles.toggleItemActive]}
            >
              <Text style={[styles.toggleText, selected && styles.toggleTextActive]}>
                {item === 'login' ? 'Login' : 'Sign up'}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Card>
        {mode === 'signup' ? (
          <FormInput
            autoComplete="name"
            label="Name"
            onChangeText={setName}
            placeholder="Your full name"
            value={name}
          />
        ) : null}
        <FormInput
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          label="Email"
          onChangeText={setEmail}
          placeholder="you@example.com"
          value={email}
        />
        <FormInput
          autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          label="Password"
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
        />
        {mode === 'signup' ? (
          <FormInput
            autoComplete="new-password"
            label="Confirm password"
            onChangeText={setConfirmPassword}
            placeholder="Re-enter your password"
            secureTextEntry
            value={confirmPassword}
          />
        ) : (
          <Pressable
            onPress={() => navigation.navigate(AuthRoutes.ForgotPassword)}
            style={styles.forgotWrap}
          >
            <Text style={styles.link}>Forgot password?</Text>
          </Pressable>
        )}
        {error ? (
          <Text accessibilityRole="alert" style={styles.error}>
            {error}
          </Text>
        ) : null}
        <Button
          disabled={submitting}
          title={mode === 'login' ? 'Login' : 'Create account'}
          onPress={submit}
        />
      </Card>
    </FormScreen>
  );
}

const styles = StyleSheet.create({
  skipButton: {
    minHeight: 40,
    minWidth: 48,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  skipText: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  toggle: {
    flexDirection: 'row',
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceAlt,
    padding: 4,
  },
  toggleItem: {
    flex: 1,
    minHeight: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
  },
  toggleItemActive: {
    backgroundColor: colors.primary,
  },
  toggleText: {
    color: colors.textMuted,
    ...typography.bodyStrong,
  },
  toggleTextActive: {
    color: colors.text,
  },
  forgotWrap: {
    alignSelf: 'flex-end',
    minHeight: 36,
    justifyContent: 'center',
  },
  link: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
  error: {
    color: colors.errorText,
    ...typography.caption,
  },
  pressed: {
    opacity: 0.65,
  },
});
