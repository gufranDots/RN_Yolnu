import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, typography } from '../../theme/tokens';

export function AuthHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.kicker}>YOLNU CARD MANAGEMENT SYSTEM</Text>
      <Text style={styles.portal}>User Portal</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    marginBottom: 8,
  },
  kicker: {
    color: colors.textMuted,
    ...typography.overline,
  },
  portal: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
  title: {
    marginTop: 10,
    color: colors.text,
    ...typography.h1,
  },
  subtitle: {
    color: colors.textMuted,
    ...typography.body,
  },
});
