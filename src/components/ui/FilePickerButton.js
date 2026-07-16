import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, spacing, typography } from '../../theme/tokens';
import { Button } from './Button';

export function FilePickerButton({ label, fileName, onPress }) {
  return (
    <View>
      <Button
        title={label}
        subtitle={fileName || 'No file chosen'}
        variant="outline"
        onPress={onPress}
        icon={<Feather name="upload" size={18} color={colors.text} />}
      />
      <Text style={styles.helper}>Demo only. This picker stores a mock filename locally.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  helper: {
    marginTop: spacing.xs,
    color: colors.textMuted,
    ...typography.caption,
  },
});
