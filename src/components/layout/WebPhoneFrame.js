import React from 'react';
import { Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { colors, typography } from '../../theme/tokens';

const FRAME_BREAKPOINT = 600;
const PHONE_WIDTH = 390;
const PHONE_HEIGHT = 844;

export function WebPhoneFrame({ children }) {
  const { width } = useWindowDimensions();
  const showFrame = Platform.OS === 'web' && width >= FRAME_BREAKPOINT;

  if (!showFrame) {
    return children;
  }

  return (
    <View style={styles.page}>
      <Text style={styles.brand}>Yolnu</Text>
      <Text style={styles.subtitle}>Yolngu Card App</Text>
      <View style={styles.bezel}>
        <View style={styles.notch}>
          <View style={styles.speaker} />
          <View style={styles.camera} />
        </View>
        <View style={styles.statusBar}>
          <Text style={styles.statusTime}>9:41</Text>
          <View style={styles.statusIcons}>
            <View style={styles.signal} />
            <View style={styles.wifi} />
            <View style={styles.battery}>
              <View style={styles.batteryFill} />
            </View>
          </View>
        </View>
        <View style={styles.screen}>{children}</View>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0F0F',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  brand: {
    color: '#FFFFFF',
    ...typography.h1,
    marginBottom: 4,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.55)',
    ...typography.caption,
    marginBottom: 28,
  },
  bezel: {
    width: PHONE_WIDTH,
    height: PHONE_HEIGHT,
    backgroundColor: '#1A1A1A',
    borderRadius: 44,
    borderWidth: 3,
    borderColor: '#2A2A2A',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 20 },
  },
  notch: {
    position: 'absolute',
    top: 10,
    left: (PHONE_WIDTH - 126) / 2,
    zIndex: 2,
    width: 126,
    height: 28,
    borderRadius: 18,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  speaker: {
    width: 48,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#1F1F1F',
  },
  camera: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1A2333',
  },
  statusBar: {
    height: 44,
    paddingHorizontal: 28,
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
  },
  statusTime: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  signal: {
    width: 16,
    height: 10,
    borderRadius: 1,
    borderWidth: 1.5,
    borderColor: colors.text,
  },
  wifi: {
    width: 12,
    height: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: colors.text,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  battery: {
    width: 22,
    height: 10,
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: colors.text,
    padding: 1,
    justifyContent: 'center',
  },
  batteryFill: {
    flex: 1,
    width: '70%',
    backgroundColor: colors.text,
    borderRadius: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
  homeIndicator: {
    alignSelf: 'center',
    width: 120,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#3A3A3A',
    marginBottom: 8,
    marginTop: 4,
  },
});
