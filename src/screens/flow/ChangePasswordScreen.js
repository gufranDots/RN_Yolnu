import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Screen } from '../../components/ui/Screen';

export function ChangePasswordScreen() {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('password123');
  const [newPassword, setNewPassword] = useState('new-password');
  const [confirmPassword, setConfirmPassword] = useState('new-password');

  return (
    <Screen title="Change pwd" showBack subtitle="Update the current password for the demo user profile.">
      <Card>
        <Input label="Old password" value={oldPassword} onChangeText={setOldPassword} secureTextEntry />
        <Input label="New password" value={newPassword} onChangeText={setNewPassword} secureTextEntry />
        <Input label="Confirm password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
        <Button title="Save changes" onPress={() => navigation.goBack()} />
      </Card>
    </Screen>
  );
}
