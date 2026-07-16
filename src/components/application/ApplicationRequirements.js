import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { applicationRequirements } from '../../data/mock';
import { colors, spacing, typography } from '../../theme/tokens';
import { Card } from '../ui/Card';

export function ApplicationRequirements() {
  return (
    <Card>
      <Text style={styles.title}>Before you submit</Text>
      <View style={styles.list}>
        {applicationRequirements.map((item) => (
          <View key={item} style={styles.item}>
            <Feather name="check-circle" size={18} color={colors.primaryDark} />
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
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
  list: {
    gap: spacing.sm,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  text: {
    flex: 1,
    color: colors.text,
    ...typography.body,
  },
});
