import React from 'react';
import { StyleSheet, View } from 'react-native';

import { cardLevels } from '../../data/mock';
import { spacing } from '../../theme/tokens';
import { RadioCard } from '../ui/RadioCard';

export function CardLevelSelector({ value, onChange }) {
  return (
    <View style={styles.list}>
      {cardLevels.map((level) => (
        <RadioCard
          key={level.id}
          title={level.title}
          description={level.description}
          selected={value === level.id}
          onPress={() => onChange(level.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: spacing.sm,
  },
});
