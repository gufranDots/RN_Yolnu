import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Screen } from '../../components/ui/Screen';
import { useDemo } from '../../context/DemoContext';
import { colors, spacing, typography } from '../../theme/tokens';

export function VerifyEmailScreen() {
  const { login } = useDemo();
  const [otp, setOtp] = useState('123456');

  return (
    <Screen title="Verify email" showBack subtitle="Enter the one-time code to confirm your account.">
      <Card>
        <Input label="OTP code" value={otp} onChangeText={setOtp} keyboardType="number-pad" maxLength={6} />
        <Button title="Verify and continue" onPress={login} />
        <View style={styles.row}>
          <Text style={styles.text}>Didn't receive it?</Text>
          <Text style={styles.link}>Resend code</Text>
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  text: {
    color: colors.textMuted,
    ...typography.body,
  },
  link: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
});
