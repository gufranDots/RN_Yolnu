import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '../../theme/tokens';

export function RadioCard({ title, description, selected, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.card, selected && styles.selected]}>
      <View style={[styles.dot, selected && styles.dotSelected]} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
  },
  selected: {
    borderColor: colors.primary,
    backgroundColor: '#FFF8EB',
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: colors.textMuted,
    marginTop: 2,
  },
  dotSelected: {
    borderColor: colors.primaryDark,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
  },
  title: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  description: {
    marginTop: 4,
    color: colors.textMuted,
    ...typography.body,
  },
});
