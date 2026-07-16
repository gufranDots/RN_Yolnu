import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Screen } from '../../components/ui/Screen';
import { AuthRoutes } from '../../navigation/routes';

export function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('Sample User');
  const [email, setEmail] = useState('sample.user@example.com');
  const [password, setPassword] = useState('password123');

  return (
    <Screen title="Sign up" showBack subtitle="Create a demo account for the Yolnu portal experience.">
      <Card>
        <Input label="Name" value={name} onChangeText={setName} />
        <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
        <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="Create account" onPress={() => navigation.navigate(AuthRoutes.VerifyEmail)} />
      </Card>
    </Screen>
  );
}
