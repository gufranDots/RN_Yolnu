import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import { AppHeader } from '../../components/layout/AppHeader';
import { colors, spacing, typography } from '../../theme/tokens';

export function WebContentScreen({ route }) {
  const { title = 'Website', url = '' } = route.params ?? {};
  const isValidUrl = /^https?:\/\//i.test(url);

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <AppHeader title={title} showBack />
      {isValidUrl ? (
        <WebView
          source={{ uri: url }}
          style={styles.webView}
          originWhitelist={['http://*', 'https://*']}
          startInLoadingState
          setSupportMultipleWindows={false}
          renderLoading={() => (
            <View style={styles.centered}>
              <ActivityIndicator size="large" color={colors.primaryDark} />
            </View>
          )}
          renderError={() => (
            <View style={styles.centered}>
              <Text style={styles.errorTitle}>Unable to load this page</Text>
              <Text style={styles.errorBody}>Check your internet connection and try again.</Text>
            </View>
          )}
        />
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
  webView: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
    backgroundColor: colors.surface,
  },
  errorTitle: {
    color: colors.text,
    ...typography.h3,
    textAlign: 'center',
  },
  errorBody: {
    color: colors.textMuted,
    ...typography.body,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});
