import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { useDemo } from '../../context/DemoContext';
import { spacing, typography, colors } from '../../theme/tokens';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { FilePickerButton } from '../ui/FilePickerButton';
import { Input } from '../ui/Input';

export function ProfileForm({ onChangePassword }) {
  const { profile, updateProfile, setProfileComplete } = useDemo();

  return (
    <Card>
      <Text style={styles.title}>Profile details</Text>
      <Input label="Name" value={profile.name} editable={false} />
      <Input
        label="Email"
        value={profile.email}
        editable={false}
        helperText="Name and email are set during registration and cannot be changed."
      />
      <Input
        label="Phone number"
        value={profile.phone}
        onChangeText={(phone) => updateProfile({ phone })}
        keyboardType="phone-pad"
      />
      <Input
        label="Year of birth"
        value={profile.yearOfBirth}
        onChangeText={(yearOfBirth) => updateProfile({ yearOfBirth })}
        keyboardType="number-pad"
      />
      <Input
        label="Address"
        value={profile.address}
        onChangeText={(address) => updateProfile({ address })}
        multiline
      />
      <FilePickerButton
        label="Profile photo"
        fileName={profile.photoLabel}
        onPress={() => updateProfile({ photoLabel: 'updated-profile-photo.jpg' })}
      />
      <Button
        title="Save profile"
        subtitle="Marks the profile as ready for demo applications"
        onPress={() => setProfileComplete(true)}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: spacing.md,
    color: colors.text,
    ...typography.h3,
  },
  link: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
});
