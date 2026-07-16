import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Screen } from '../../components/ui/Screen';
import { AuthRoutes } from '../../navigation/routes';

export function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('sample.user@example.com');

  return (
    <Screen title="Forgot password" showBack subtitle="Send a reset link to continue the demo recovery flow.">
      <Card>
        <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
        <Button title="Send reset link" onPress={() => navigation.navigate(AuthRoutes.ResetPassword)} />
      </Card>
    </Screen>
  );
}
