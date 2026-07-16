import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '../../theme/tokens';

export function StatusBanner({ title, message, tone = 'success' }) {
  return (
    <View style={[styles.container, styles[tone]]}>
      <Text style={[styles.title, styles[`${tone}Title`]]}>{title}</Text>
      <Text style={[styles.message, styles[`${tone}Title`]]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
  },
  title: {
    marginBottom: 4,
    ...typography.bodyStrong,
  },
  message: {
    ...typography.body,
  },
  success: {
    backgroundColor: colors.successBg,
    borderColor: '#BFE6CB',
  },
  successTitle: {
    color: colors.successText,
  },
  error: {
    backgroundColor: colors.errorBg,
    borderColor: '#F5CACA',
  },
  errorTitle: {
    color: colors.errorText,
  },
  warning: {
    backgroundColor: colors.warningBg,
    borderColor: '#F0D8A1',
  },
  warningTitle: {
    color: colors.warningText,
  },
});
