import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/layout/Header';
import { trainingContent, trainingProviders } from '../../data/training';
import { GuestRoutes } from '../../navigation/routes';
import { colors, radius, spacing, typography } from '../../theme/tokens';

export function TrainingDetailScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <Header title="Training" showBack />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.heroIcon}>
            <Feather name="book-open" size={29} color={colors.text} />
          </View>
          <Text style={styles.eyebrow}>{trainingContent.eyebrow}</Text>
          <Text style={styles.title}>{trainingContent.title}</Text>
          <Text style={styles.introduction}>{trainingContent.introduction}</Text>
        </View>

        <View style={styles.providers}>
          <Text style={styles.eyebrow}>TRAINING PROVIDERS</Text>
          <Text style={styles.sectionTitle}>{trainingContent.sectionTitle}</Text>
          <Text style={styles.sectionIntroduction}>
            {trainingContent.sectionIntroduction}
          </Text>

          {trainingProviders.map((provider) => (
            <Pressable
              accessibilityHint="Opens the training provider inside the app"
              accessibilityLabel={`Visit ${provider.name}`}
              accessibilityRole="link"
              key={provider.id}
              onPress={() =>
                navigation.navigate(GuestRoutes.WebContent, {
                  title: provider.name,
                  url: provider.url,
                })
              }
              style={({ pressed }) => [styles.providerCard, pressed && styles.pressed]}
            >
              <View style={styles.providerIcon}>
                <Feather name="award" size={22} color={colors.text} />
              </View>
              <View style={styles.providerCopy}>
                <Text style={styles.providerName}>{provider.name}</Text>
                <Text style={styles.providerDescription}>{provider.description}</Text>
                <View style={styles.providerAction}>
                  <Text style={styles.providerActionText}>View provider</Text>
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
  introduction: {
    color: colors.textMuted,
    ...typography.body,
    marginTop: spacing.md,
  },
  providers: {
    gap: spacing.sm,
  },
  sectionTitle: {
    color: colors.text,
    ...typography.h2,
  },
  sectionIntroduction: {
    color: colors.textMuted,
    ...typography.body,
    marginBottom: spacing.xs,
  },
  providerCard: {
    minHeight: 126,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  providerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  providerCopy: {
    flex: 1,
  },
  providerName: {
    color: colors.text,
    ...typography.h3,
  },
  providerDescription: {
    color: colors.textMuted,
    ...typography.body,
    marginTop: 4,
  },
  providerAction: {
    minHeight: 34,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: spacing.xs,
  },
  providerActionText: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
  pressed: {
    opacity: 0.7,
  },
});
