import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppHeader } from '../../components/layout/AppHeader';
import { colors, spacing, typography } from '../../theme/tokens';

export function WebContentScreen({ route }) {
  const { title = 'Website', url = '' } = route.params ?? {};
  const [isLoading, setIsLoading] = useState(true);
  const isValidUrl = /^https?:\/\//i.test(url);

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <AppHeader title={title} showBack />
      {isValidUrl ? (
        <View style={styles.frameWrap}>
          {React.createElement('iframe', {
            src: url,
            title,
            onLoad: () => setIsLoading(false),
            allowFullScreen: true,
            referrerPolicy: 'strict-origin-when-cross-origin',
            style: styles.iframe,
          })}
          {isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={colors.primaryDark} />
            </View>
          ) : null}
        </View>
      ) : (
        <View style={styles.centered}>
          <Text style={styles.errorTitle}>Invalid website address</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  frameWrap: {
    flex: 1,
    minHeight: 0,
    position: 'relative',
    backgroundColor: colors.surface,
  },
  iframe: {
    width: '100%',
    height: '100%',
    borderWidth: 0,
    display: 'block',
    backgroundColor: colors.surface,
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  errorTitle: {
    color: colors.text,
    ...typography.h3,
    textAlign: 'center',
  },
});
