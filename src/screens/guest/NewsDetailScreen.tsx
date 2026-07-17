import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/layout/Header';
import { newsContent, newsSources } from '../../data/news';
import { GuestRoutes } from '../../navigation/routes';
import { colors, radius, spacing, typography } from '../../theme/tokens';

export function NewsDetailScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <Header title="News & Updates" showBack />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.heroIcon}>
            <Feather name="file-text" size={29} color={colors.text} />
          </View>
          <Text style={styles.eyebrow}>{newsContent.eyebrow}</Text>
          <Text style={styles.title}>{newsContent.title}</Text>
          <Text style={styles.introduction}>{newsContent.introduction}</Text>
        </View>

        <View style={styles.notice}>
          <View style={styles.noticeIcon}>
            <Feather name="clock" size={20} color={colors.warningText} />
          </View>
          <View style={styles.noticeCopy}>
            <Text style={styles.noticeTitle}>Live news coming soon</Text>
            <Text style={styles.noticeBody}>{newsContent.notice}</Text>
          </View>
        </View>

        <View style={styles.sources}>
          <Text style={styles.sectionEyebrow}>NEWS SOURCES</Text>
          <Text style={styles.sectionTitle}>{newsContent.sectionTitle}</Text>

          {newsSources.map((source) => (
            <Pressable
              accessibilityHint="Opens this news source inside the app"
              accessibilityLabel={`Visit ${source.name}`}
              accessibilityRole="link"
              key={source.id}
              onPress={() =>
                navigation.navigate(GuestRoutes.WebContent, {
                  title: source.name,
                  url: source.url,
                })
              }
              style={({ pressed }) => [styles.sourceCard, pressed && styles.pressed]}
            >
              <View style={styles.sourceIcon}>
                <Feather name="globe" size={21} color={colors.text} />
              </View>
              <View style={styles.sourceCopy}>
                <Text style={styles.sourceName}>{source.name}</Text>
                <Text style={styles.sourceDescription}>{source.description}</Text>
                <View style={styles.sourceAction}>
                  <Text style={styles.sourceActionText}>Visit source</Text>
                  <Feather name="arrow-up-right" size={16} color={colors.primaryDark} />
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
    gap: spacing.xl,
  },
  hero: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.xl,
  },
  heroIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    marginBottom: spacing.lg,
  },
  eyebrow: {
    color: colors.primaryDark,
    ...typography.overline,
  },
  title: {
    color: colors.text,
    ...typography.h1,
    marginTop: spacing.xs,
  },
  introduction: {
    color: colors.textMuted,
    ...typography.body,
    marginTop: spacing.md,
  },
  notice: {
    borderRadius: radius.md,
    backgroundColor: colors.warningBg,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  noticeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  noticeCopy: {
    flex: 1,
  },
  noticeTitle: {
    color: colors.warningText,
    ...typography.bodyStrong,
  },
  noticeBody: {
    color: colors.warningText,
    ...typography.caption,
    marginTop: 3,
  },
  sources: {
    gap: spacing.sm,
  },
  sectionEyebrow: {
    color: colors.primaryDark,
    ...typography.overline,
  },
  sectionTitle: {
    color: colors.text,
    ...typography.h2,
    marginBottom: spacing.xs,
  },
  sourceCard: {
    minHeight: 132,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  sourceIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  sourceCopy: {
    flex: 1,
  },
  sourceName: {
    color: colors.text,
    ...typography.h3,
  },
  sourceDescription: {
    color: colors.textMuted,
    ...typography.body,
    marginTop: 4,
  },
  sourceAction: {
    minHeight: 34,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: spacing.xs,
  },
  sourceActionText: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
  pressed: {
    opacity: 0.7,
  },
});
