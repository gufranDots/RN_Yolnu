import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography } from '../../theme/tokens';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export function MessageCard({ message }) {
  return (
    <Card>
      <View style={styles.header}>
        <View style={styles.content}>
          <Text style={styles.subject}>{message.subject}</Text>
          <Text style={styles.meta}>From {message.from} · {message.sentAt}</Text>
        </View>
        <Badge label={message.badge} />
      </View>
      <Text style={styles.body}>{message.body}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
    marginBottom: spacing.sm,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  subject: {
    color: colors.text,
    ...typography.h3,
  },
  meta: {
    color: colors.textMuted,
    ...typography.caption,
  },
  body: {
    color: colors.text,
    ...typography.body,
  },
});
