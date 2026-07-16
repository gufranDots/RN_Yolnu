import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useResponsive } from '../../theme/responsive';
import { colors, typography } from '../../theme/tokens';

export function ScreenHeader({ subtitle, brand }) {
  const { isCompact } = useResponsive();

  if (!subtitle && !brand) {
    return null;
  }

  return (
    <View style={[styles.container, isCompact && styles.compact]}>
      {brand ? <Text style={styles.brand}>{brand}</Text> : null}
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
    marginBottom: 4,
  },
  compact: {
    marginBottom: 0,
  },
  brand: {
    color: colors.primaryDark,
    ...typography.overline,
  },
  subtitle: {
    color: colors.textMuted,
    ...typography.body,
  },
});
