import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useDemo } from '../../context/DemoContext';
import { spacing, typography, colors } from '../../theme/tokens';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';

export function ProfileForm() {
  const { profile, updateProfile, setProfileComplete } = useDemo();
  const hasPhoto = Boolean(profile.photoLabel);

  return (
    <Card>
      <Text style={styles.title}>Profile details</Text>

      <View style={styles.avatarSection}>
        <Pressable
          style={({ pressed }) => [styles.avatar, pressed && styles.avatarPressed]}
          onPress={() => updateProfile({ photoLabel: 'updated-profile-photo.jpg' })}
        >
          <View style={[styles.avatarCircle, hasPhoto && styles.avatarCircleFilled]}>
            <Feather
              name={hasPhoto ? 'user' : 'camera'}
              size={hasPhoto ? 40 : 28}
              color={hasPhoto ? colors.primaryDark : colors.textMuted}
            />
          </View>
          <View style={styles.cameraBadge}>
            <Feather name="camera" size={12} color={colors.text} />
          </View>
        </Pressable>
        <Text style={styles.avatarHint}>
          {hasPhoto ? profile.photoLabel : 'Tap to add profile photo'}
        </Text>
      </View>

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
      <Button title="Save profile" onPress={() => setProfileComplete(true)} />
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: spacing.md,
    color: colors.text,
    ...typography.h3,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  avatar: {
    position: 'relative',
    marginBottom: spacing.sm,
  },
  avatarPressed: {
    opacity: 0.85,
  },
  avatarCircle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: colors.surfaceAlt,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarCircleFilled: {
    backgroundColor: '#F8E9CF',
    borderColor: colors.primary,
  },
  cameraBadge: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarHint: {
    color: colors.textMuted,
    textAlign: 'center',
    ...typography.caption,
  },
});
