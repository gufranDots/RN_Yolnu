import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/layout/Header';
import { eastArnhem } from '../../data/eastArnhem';
import { GuestRoutes } from '../../navigation/routes';
import { colors, radius, spacing, typography } from '../../theme/tokens';

export function EastArnhemDetailScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <Header title="East Arnhem Land" showBack />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.heroIcon}>
            <Feather name="map-pin" size={30} color={colors.text} />
          </View>
          <Text style={styles.eyebrow}>{eastArnhem.eyebrow}</Text>
          <Text style={styles.title}>{eastArnhem.title}</Text>
          <Text style={styles.introduction}>{eastArnhem.introduction}</Text>
        </View>

        <View style={styles.contextCard}>
          <View style={styles.contextHeading}>
            <Feather name="compass" size={20} color={colors.primaryDark} />
            <Text style={styles.contextTitle}>Country and culture</Text>
          </View>
          <Text style={styles.contextBody}>{eastArnhem.culturalContext}</Text>
        </View>

        <View style={styles.communities}>
          <Text style={styles.sectionEyebrow}>COMMUNITIES</Text>
          <Text style={styles.sectionTitle}>Yolŋu communities of East Arnhem Land</Text>
          <Text style={styles.sectionBody}>{eastArnhem.communitiesIntroduction}</Text>

          <Pressable
            accessibilityHint="Opens a map with all seven communities"
            accessibilityLabel="Explore communities on map"
            accessibilityRole="button"
            onPress={() => navigation.navigate(GuestRoutes.CommunityMap)}
            style={({ pressed }) => [styles.exploreButton, pressed && styles.pressed]}
          >
            <View style={styles.exploreIcon}>
              <Feather name="map" size={23} color={colors.text} />
            </View>
            <View style={styles.exploreCopy}>
              <Text style={styles.exploreTitle}>Explore communities on map</Text>
              <Text style={styles.exploreBody}>
                View all seven communities and select a map pin for details.
              </Text>
            </View>
            <Feather name="arrow-right" size={20} color={colors.text} />
          </Pressable>
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
    padding: spacing.xl,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
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
  contextCard: {
    borderRadius: radius.md,
    padding: spacing.lg,
    backgroundColor: colors.surfaceAlt,
    gap: spacing.sm,
  },
  contextHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  contextTitle: {
    color: colors.text,
    ...typography.h3,
  },
  contextBody: {
    color: colors.textMuted,
    ...typography.body,
  },
  communities: {
    gap: spacing.sm,
  },
  sectionEyebrow: {
    color: colors.primaryDark,
    ...typography.overline,
  },
  sectionTitle: {
    color: colors.text,
    ...typography.h2,
  },
  sectionBody: {
    color: colors.textMuted,
    ...typography.body,
    marginBottom: spacing.xs,
  },
  exploreButton: {
    minHeight: 92,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  exploreIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  exploreCopy: {
    flex: 1,
  },
  exploreTitle: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  exploreBody: {
    color: colors.text,
    ...typography.caption,
    marginTop: 2,
  },
  communityCard: {
    overflow: 'hidden',
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  communityVisual: {
    minHeight: 116,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  },
  communityPin: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  coordinates: {
    alignItems: 'flex-end',
  },
  coordinateText: {
    color: colors.text,
    ...typography.caption,
    fontWeight: '700',
  },
  communityContent: {
    padding: spacing.lg,
  },
  communityName: {
    color: colors.text,
    ...typography.h2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  locationText: {
    color: colors.primaryDark,
    ...typography.caption,
  },
  communityDescription: {
    color: colors.textMuted,
    ...typography.body,
    marginTop: spacing.md,
  },
  mapAction: {
    alignSelf: 'flex-start',
    minHeight: 42,
    marginTop: spacing.md,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  mapActionText: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  pressed: {
    opacity: 0.72,
  },
});
