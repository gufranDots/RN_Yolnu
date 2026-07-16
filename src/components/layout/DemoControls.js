import React, { useState } from 'react';
import { Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useDemo } from '../../context/DemoContext';
import { useResponsive } from '../../theme/responsive';
import { colors, radius, spacing, typography } from '../../theme/tokens';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

function DemoSheet({ onClose }) {
  const {
    profileComplete,
    setProfileComplete,
    showInvalidFileError,
    setShowInvalidFileError,
    setApplicationStatus,
    resetDemo,
  } = useDemo();

  return (
    <Pressable style={styles.backdrop} onPress={onClose}>
      <Pressable style={styles.sheet} onPress={() => {}}>
        <ScrollView bounces={false} keyboardShouldPersistTaps="handled">
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
        </ScrollView>
      </Pressable>
    </Pressable>
  );
}

export function DemoControls() {
  const [visible, setVisible] = useState(false);
  const { tabBarOffset } = useResponsive();
  const close = () => setVisible(false);

  return (
    <>
      <Pressable style={[styles.fab, { bottom: tabBarOffset + 12 }]} onPress={() => setVisible(true)}>
        <Feather name="sliders" size={18} color={colors.text} />
        <Text style={styles.fabLabel}>Demo</Text>
      </Pressable>
      {Platform.OS === 'web' ? (
        visible ? (
          <View style={styles.webOverlay} pointerEvents="box-none">
            <DemoSheet onClose={close} />
          </View>
        ) : null
      ) : (
        <Modal visible={visible} animationType="slide" transparent onRequestClose={close}>
          <DemoSheet onClose={close} />
        </Modal>
      )}
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
  webOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
  },
  backdrop: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  },
  sheet: {
    maxHeight: '85%',
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
