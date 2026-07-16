import React, { useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Screen } from '../../components/ui/Screen';
import { AuthRoutes } from '../../navigation/routes';

export function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState('password123');
  const [confirmPassword, setConfirmPassword] = useState('password123');

  return (
    <Screen title="Set new pwd" showBack subtitle="Verify and save your new password to return to login.">
      <Card>
        <Input label="New password" value={password} onChangeText={setPassword} secureTextEntry />
        <Input label="Confirm password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
        <Button
          title="Save password"
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: AuthRoutes.Login }],
              })
            )
          }
        />
      </Card>
    </Screen>
  );
}
