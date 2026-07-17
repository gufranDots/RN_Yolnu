import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppHeader } from '../layout/AppHeader';
import { ScreenHeader } from '../layout/ScreenHeader';
import { useResponsive } from '../../theme/responsive';
import { colors } from '../../theme/tokens';

export function Screen({
  children,
  scroll = true,
  title = undefined,
  showBack = false,
  onBack = undefined,
  subtitle = undefined,
  brand = undefined,
  headerRight = undefined,
  contentStyle = undefined,
  safeStyle = undefined,
  tabScreen = false,
}) {
  const { horizontalPadding, contentGap, tabBarOffset } = useResponsive();
  const Wrapper = scroll ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.safe, safeStyle]} edges={['left', 'right']}>
      {title ? (
        <AppHeader
          title={title}
          showBack={showBack}
          onBack={onBack}
          right={headerRight}
          showProfile={tabScreen}
        />
      ) : null}
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 8 : 0}
      >
        <Wrapper
          style={styles.flex}
          contentContainerStyle={[
            styles.content,
            {
              paddingHorizontal: horizontalPadding,
              gap: contentGap,
              paddingBottom: tabScreen ? tabBarOffset : contentGap * 2,
            },
            contentStyle,
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <ScreenHeader subtitle={subtitle} brand={brand} />
          {children}
        </Wrapper>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  content: {
    paddingTop: 16,
    flexGrow: 1,
  },
});
