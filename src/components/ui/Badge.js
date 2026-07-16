import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '../../theme/tokens';

export function Badge({ label, tone = 'warning' }) {
  return (
    <View style={[styles.badge, styles[tone]]}>
      <Text style={[styles.label, styles[`${tone}Text`]]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: radius.pill,
  },
  label: {
    ...typography.caption,
  },
  warning: { backgroundColor: colors.warningBg },
  warningText: { color: colors.warningText },
  success: { backgroundColor: colors.successBg },
  successText: { color: colors.successText },
  error: { backgroundColor: colors.errorBg },
  errorText: { color: colors.errorText },
});
