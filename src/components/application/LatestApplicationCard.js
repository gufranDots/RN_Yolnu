import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { latestApplication } from '../../data/mock';
import { colors, spacing, typography } from '../../theme/tokens';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { InfoTile } from '../ui/InfoTile';

export function LatestApplicationCard({ status }) {
  const tone = status === 'approved' ? 'success' : status === 'rejected' ? 'error' : 'warning';
  const label = status === 'none' ? 'No application yet' : status[0].toUpperCase() + status.slice(1);

  return (
    <Card>
      <View style={styles.header}>
        <Text style={styles.title}>Latest application</Text>
        <Badge label={label} tone={tone} />
      </View>
      <View style={styles.grid}>
        <InfoTile label="Type" value={latestApplication.type} />
        <InfoTile label="Card level" value={latestApplication.cardLevel} />
        <InfoTile label="Submitted" value={latestApplication.submittedAt} />
        <InfoTile label="Files" value={latestApplication.filesUploaded} />
      </View>
      <Text style={styles.link}>Cancel Request</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  title: {
    color: colors.text,
    ...typography.h3,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  link: {
    marginTop: spacing.md,
    color: colors.textMuted,
    ...typography.body,
  },
});
