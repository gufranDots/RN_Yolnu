import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { cardDetails } from '../../data/mock';
import { colors, spacing, typography } from '../../theme/tokens';
import { Card } from '../ui/Card';
import { InfoTile } from '../ui/InfoTile';

export function CardDetailsGrid() {
  return (
    <Card>
      <Text style={styles.title}>Card details</Text>
      <View style={styles.grid}>
        <InfoTile label="Level" value={cardDetails.level} />
        <InfoTile label="Name" value={cardDetails.name} />
        <InfoTile label="Status" value={cardDetails.status} />
        <InfoTile label="Card ID" value={cardDetails.cardId} />
        <InfoTile label="Issue Date" value={cardDetails.issueDate} />
        <InfoTile label="Valid Until" value={cardDetails.validUntil} />
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
