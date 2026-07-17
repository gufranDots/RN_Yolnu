import React, { useCallback } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import { useResponsive } from '../../theme/responsive';
import { colors, radius, shadows, spacing, typography } from '../../theme/tokens';

export function OnboardingPage({ page, width, height }) {
  const { horizontalPadding, isCompact } = useResponsive();

  const openExternalLink = useCallback(async (url) => {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('Unable to open link', 'Please try again when you have an internet connection.');
    }
  }, []);

  return (
    <ScrollView
      style={[styles.page, { width, height }]}
      contentContainerStyle={[
        styles.content,
        {
          paddingHorizontal: horizontalPadding,
          paddingTop: isCompact ? spacing.sm : spacing.lg,
        },
      ]}
      showsVerticalScrollIndicator
      scrollEnabled
      nestedScrollEnabled
      directionalLockEnabled
      contentInsetAdjustmentBehavior="never"
    >
      <View style={styles.hero}>
        <View style={[styles.iconCircle, isCompact && styles.iconCircleCompact]}>
          <Ionicons
            name={page.icon}
            size={isCompact ? 34 : 42}
            color={colors.primaryDark}
          />
        </View>
        <Text style={styles.eyebrow}>{page.eyebrow}</Text>
        <Text style={[styles.title, isCompact && styles.titleCompact]}>{page.title}</Text>
        <Text style={styles.description}>{page.description}</Text>
      </View>

      {page.notice ? (
        <View style={styles.notice}>
          <Ionicons name="time-outline" size={18} color={colors.warningText} />
          <Text style={styles.noticeText}>{page.notice}</Text>
        </View>
      ) : null}

      {page.actions ? (
        <View style={styles.actionRow}>
          {page.actions.map((action) => (
            <Pressable
              accessibilityRole="link"
              key={action.url}
              onPress={() => openExternalLink(action.url)}
              style={({ pressed }) => [styles.action, pressed && styles.pressed]}
            >
              <Text style={styles.actionText}>{action.label}</Text>
              <Ionicons name="open-outline" size={15} color={colors.primaryDark} />
            </Pressable>
          ))}
        </View>
      ) : null}

      <Pressable
        accessibilityRole="link"
        onPress={() => openExternalLink(page.sourceUrl)}
        style={({ pressed }) => [styles.sourceLink, pressed && styles.pressed]}
      >
        <Text style={styles.sourceText}>Read this section on the website</Text>
        <Ionicons name="open-outline" size={15} color={colors.textMuted} />
      </Pressable>

      <View style={styles.sectionList}>
        {page.sections.map((section) => (
          <View key={section.title} style={styles.sectionCard}>
            {section.badge ? <Text style={styles.badge}>{section.badge}</Text> : null}
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionBody}>{section.body}</Text>
            {section.url ? (
              <Pressable
                accessibilityRole="link"
                onPress={() => openExternalLink(section.url)}
                style={({ pressed }) => [styles.inlineLink, pressed && styles.pressed]}
              >
                <Text style={styles.inlineLinkText}>{section.linkLabel}</Text>
                <Ionicons name="arrow-forward" size={15} color={colors.primaryDark} />
              </Pressable>
            ) : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    paddingBottom: spacing.xxl * 2,
    gap: spacing.md,
  },
  hero: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  iconCircleCompact: {
    width: 68,
    height: 68,
    borderRadius: 34,
    marginBottom: spacing.sm,
  },
  eyebrow: {
    color: colors.primaryDark,
    ...typography.overline,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  title: {
    color: colors.text,
    ...typography.h1,
    textAlign: 'center',
  },
  titleCompact: {
    fontSize: 24,
    lineHeight: 29,
  },
  description: {
    color: colors.textMuted,
    ...typography.body,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  notice: {
    minHeight: 44,
    borderRadius: radius.md,
    backgroundColor: colors.warningBg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  noticeText: {
    color: colors.warningText,
    ...typography.bodyStrong,
    flex: 1,
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  action: {
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  actionText: {
    color: colors.primaryDark,
    ...typography.caption,
    fontWeight: '700',
  },
  sectionList: {
    gap: spacing.sm,
  },
  sectionCard: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
    ...shadows.card,
  },
  badge: {
    color: colors.primaryDark,
    ...typography.overline,
    marginBottom: 4,
  },
  sectionTitle: {
    color: colors.text,
    ...typography.h3,
  },
  sectionBody: {
    color: colors.textMuted,
    ...typography.body,
    marginTop: 4,
  },
  inlineLink: {
    minHeight: 36,
    marginTop: spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
  },
  inlineLinkText: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
  sourceLink: {
    minHeight: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xs,
  },
  sourceText: {
    color: colors.textMuted,
    ...typography.caption,
  },
  pressed: {
    opacity: 0.65,
  },
});
