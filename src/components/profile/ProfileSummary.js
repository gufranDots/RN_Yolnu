import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useDemo } from '../../context/DemoContext';
import { colors, spacing, typography } from '../../theme/tokens';
import { Card } from '../ui/Card';
import { InfoTile } from '../ui/InfoTile';

export function ProfileSummary() {
  const { profile } = useDemo();

  return (
    <Card>
      <Text style={styles.title}>Current saved values</Text>
      <View style={styles.grid}>
        <InfoTile label="Name" value={profile.name} />
        <InfoTile label="Email" value={profile.email} />
        <InfoTile label="Phone number" value={profile.phone} />
        <InfoTile label="Year of birth" value={profile.yearOfBirth} />
        <InfoTile label="Address" value={profile.address} />
        <InfoTile label="Profile photo" value={profile.photoLabel} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: spacing.md,
    color: colors.text,
    ...typography.h3,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
});
