import { Feather } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/layout/Header';
import {
  culturalCompetencyFramework,
  frameworkCardLevels,
  frameworkStages,
} from '../../data/culturalCompetency';
import { colors, radius, spacing, typography } from '../../theme/tokens';

export function CulturalCompetencyDetailScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <Header title="Cultural Competency" showBack />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.heroIcon}>
            <Feather name="users" size={29} color={colors.text} />
          </View>
          <Text style={styles.eyebrow}>{culturalCompetencyFramework.eyebrow}</Text>
          <Text style={styles.title}>{culturalCompetencyFramework.title}</Text>
          <Text style={styles.body}>{culturalCompetencyFramework.introduction}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.eyebrow}>THE PROGRESSION</Text>
          <Text style={styles.sectionTitle}>Four stages of cultural growth</Text>
          <Text style={styles.sectionIntro}>
            {culturalCompetencyFramework.progressionIntroduction}
          </Text>

          {frameworkStages.map((stage) => (
            <View key={stage.number} style={styles.stageCard}>
              <View style={styles.numberCircle}>
                <Text style={styles.numberText}>{stage.number}</Text>
              </View>
              <View style={styles.cardCopy}>
                <Text style={styles.action}>{stage.action.toUpperCase()}</Text>
                <Text style={styles.cardTitle}>{stage.title}</Text>
                <Text style={styles.cardBody}>{stage.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.eyebrow}>CARD LEVELS</Text>
          <Text style={styles.sectionTitle}>What each card level represents</Text>
          <Text style={styles.sectionIntro}>
            Each level corresponds to a stage of the cultural competency framework and has
            its own requirements for training, experience, and endorsement.
          </Text>

          {frameworkCardLevels.map((card) => (
            <View key={card.level} style={styles.levelCard}>
              <View style={styles.levelPill}>
                <Text style={styles.levelText}>Level {card.level}</Text>
              </View>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardBody}>{card.description}</Text>
            </View>
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
    gap: spacing.xxl,
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
  body: {
    color: colors.textMuted,
    ...typography.body,
    marginTop: spacing.md,
  },
  section: {
    gap: spacing.sm,
  },
  sectionTitle: {
    color: colors.text,
    ...typography.h2,
  },
  sectionIntro: {
    color: colors.textMuted,
    ...typography.body,
    marginBottom: spacing.xs,
  },
  stageCard: {
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
  },
  numberCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  numberText: {
    color: colors.text,
    ...typography.h3,
  },
  cardCopy: {
    flex: 1,
  },
  action: {
    color: colors.primaryDark,
    ...typography.overline,
  },
  cardTitle: {
    color: colors.text,
    ...typography.h3,
    marginTop: 3,
  },
  cardBody: {
    color: colors.textMuted,
    ...typography.body,
    marginTop: spacing.xs,
  },
  levelCard: {
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.lg,
  },
  levelPill: {
    alignSelf: 'flex-start',
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
  },
  levelText: {
    color: colors.text,
    ...typography.caption,
    fontWeight: '700',
  },
});
