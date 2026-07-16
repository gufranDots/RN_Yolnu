import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { cardDetails } from '../../data/mock';
import { useResponsive } from '../../theme/responsive';
import { colors, radius, spacing, typography } from '../../theme/tokens';

export function YolnguCardPreview() {
  const { isCompact } = useResponsive();

  return (
    <View style={styles.card}>
      <View style={styles.topBand}>
        <Text style={styles.brand}>Dilak Council</Text>
        <Text style={styles.brandSub}>Working with Yolnu Card</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.main}>
          <Text style={styles.overline}>YOLNU CARD HOLDER</Text>
          <Text style={[styles.name, isCompact && styles.nameCompact]}>{cardDetails.name}</Text>
          <Text style={styles.status}>{cardDetails.status}</Text>
          <View style={styles.row}>
            <View style={styles.metaBlock}>
              <Text style={styles.metaLabel}>CARD LEVEL</Text>
              <Text style={styles.metaValue}>{cardDetails.level}</Text>
            </View>
            <View style={styles.metaBlock}>
              <Text style={styles.metaLabel}>ISSUE DATE</Text>
              <Text style={styles.metaValue}>{cardDetails.issueDate}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.photo, isCompact && styles.photoCompact]} />
      </View>
      <View style={styles.bottomBand}>
        <View>
          <Text style={styles.footerLabel}>VALID UNTIL</Text>
          <Text style={styles.footerValue}>{cardDetails.validUntil}</Text>
        </View>
        <View>
          <Text style={styles.footerLabel}>CARD ID</Text>
          <Text style={styles.footerValue}>{cardDetails.cardId}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  topBand: {
    backgroundColor: colors.brandRed,
    padding: spacing.md,
    alignItems: 'flex-end',
  },
  brand: {
    color: '#FFFFFF',
    ...typography.h3,
  },
  brandSub: {
    color: '#F6D6D6',
    ...typography.caption,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: '#FFFDFB',
  },
  main: {
    flex: 1,
    gap: 8,
  },
  overline: {
    color: colors.textMuted,
    ...typography.overline,
  },
  name: {
    color: colors.text,
    ...typography.h2,
  },
  nameCompact: {
    fontSize: 22,
    lineHeight: 28,
  },
  status: {
    color: colors.successText,
    ...typography.bodyStrong,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  metaBlock: {
    flex: 1,
    minWidth: 120,
  },
  metaLabel: {
    color: colors.textMuted,
    ...typography.caption,
  },
  metaValue: {
    color: colors.text,
    ...typography.caption,
  },
  photo: {
    width: 72,
    height: 88,
    borderRadius: radius.md,
    backgroundColor: '#ECECEC',
  },
  photoCompact: {
    width: 64,
    height: 78,
  },
  bottomBand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.brandRed,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  footerLabel: {
    color: '#F6D6D6',
    ...typography.caption,
  },
  footerValue: {
    color: '#FFFFFF',
    ...typography.bodyStrong,
  },
});
