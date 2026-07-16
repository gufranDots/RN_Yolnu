import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useDemo } from '../../context/DemoContext';
import { useResponsive } from '../../theme/responsive';
import { colors, radius, spacing, typography } from '../../theme/tokens';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function DemoControls() {
  const [visible, setVisible] = useState(false);
  const { tabBarOffset } = useResponsive();
  const {
    profileComplete,
    setProfileComplete,
    applicationStatus,
    setApplicationStatus,
    showInvalidFileError,
    setShowInvalidFileError,
    resetDemo,
  } = useDemo();

  return (
    <>
      <Pressable style={[styles.fab, { bottom: tabBarOffset + 12 }]} onPress={() => setVisible(true)}>
        <Feather name="sliders" size={18} color={colors.text} />
        <Text style={styles.fabLabel}>Demo</Text>
      </Pressable>
      <Modal visible={visible} animationType="slide" transparent onRequestClose={() => setVisible(false)}>
        <Pressable style={styles.backdrop} onPress={() => setVisible(false)}>
          <Pressable style={styles.sheet} onPress={() => {}}>
            <Card>
              <Text style={styles.title}>Demo controls</Text>
              <Text style={styles.subtitle}>Quickly switch between happy path and edge-case states.</Text>
              <View style={styles.group}>
                <Button
                  title={profileComplete ? 'Profile complete' : 'Profile incomplete'}
                  variant="secondary"
                  onPress={() => setProfileComplete(!profileComplete)}
                />
                <Button
                  title={showInvalidFileError ? 'Hide invalid file state' : 'Show invalid file state'}
                  variant="secondary"
                  onPress={() => setShowInvalidFileError(!showInvalidFileError)}
                />
              </View>
              <View style={styles.group}>
                <Button title="No application" variant="outline" onPress={() => setApplicationStatus('none')} />
                <Button title="Pending review" variant="outline" onPress={() => setApplicationStatus('pending')} />
                <Button title="Approved" variant="outline" onPress={() => setApplicationStatus('approved')} />
                <Button title="Rejected" variant="outline" onPress={() => setApplicationStatus('rejected')} />
              </View>
              <Button title="Reset demo" variant="secondary" onPress={resetDemo} />
            </Card>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    zIndex: 10,
  },
  fabLabel: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  backdrop: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  },
  sheet: {
    padding: spacing.md,
  },
  title: {
    color: colors.text,
    ...typography.h3,
  },
  subtitle: {
    marginTop: 4,
    marginBottom: spacing.md,
    color: colors.textMuted,
    ...typography.body,
  },
  group: {
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
});
