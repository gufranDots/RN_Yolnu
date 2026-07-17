import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/layout/Header';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { guestTiles } from '../../data/guestTiles';
import { GuestRoutes } from '../../navigation/routes';
import { colors, radius, spacing, typography } from '../../theme/tokens';

export function GuestHomeScreen() {
  const navigation = useNavigation<any>();
  const { showLogin } = useAuth();
  const [loginPromptVisible, setLoginPromptVisible] = useState(false);

  const continueToLogin = async () => {
    setLoginPromptVisible(false);
    await showLogin();
  };

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <Header
        title="Explore as guest"
        showLogin
        onLoginPress={() => setLoginPromptVisible(true)}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.intro}>
          <Text style={styles.eyebrow}>WORKING WITH YOLŊU</Text>
          <Text style={styles.title}>Learn, connect and explore</Text>
          <Text style={styles.body}>
            Browse public resources below. Sign in when you are ready to access your card,
            applications and messages.
          </Text>
        </View>

        <View style={styles.grid}>
          {guestTiles.map((tile) => (
            <Pressable
              accessibilityHint={`Opens ${tile.label}`}
              accessibilityRole="link"
              key={tile.id}
              onPress={() => {
                if (tile.destination === 'cultural-competency-detail') {
                  navigation.navigate(GuestRoutes.CulturalCompetencyDetail);
                  return;
                }
                if (tile.destination === 'training-detail') {
                  navigation.navigate(GuestRoutes.TrainingDetail);
                  return;
                }
                if (tile.destination === 'east-arnhem-detail') {
                  navigation.navigate(GuestRoutes.EastArnhemDetail);
                  return;
                }
                if (tile.destination === 'news-detail') {
                  navigation.navigate(GuestRoutes.NewsDetail);
                  return;
                }

                navigation.navigate(GuestRoutes.WebContent, {
                  title: tile.label,
                  url: tile.url,
                });
              }}
              style={({ pressed }) => [styles.tile, pressed && styles.tilePressed]}
            >
              <View style={styles.tileIcon}>
                <Feather name={tile.icon} size={25} color={colors.text} />
              </View>
              <Text style={styles.tileLabel}>{tile.label}</Text>
              <Feather name="arrow-up-right" size={18} color={colors.primaryDark} />
            </Pressable>
          ))}
        </View>

        <Pressable
          onPress={() => setLoginPromptVisible(true)}
          style={({ pressed }) => [styles.memberCard, pressed && styles.tilePressed]}
        >
          <Feather name="lock" size={22} color={colors.text} />
          <View style={styles.memberCopy}>
            <Text style={styles.memberTitle}>Member services</Text>
            <Text style={styles.memberBody}>View your card, messages or application.</Text>
          </View>
          <Feather name="chevron-right" size={20} color={colors.text} />
        </Pressable>
      </ScrollView>

      <Modal
        animationType="fade"
        onRequestClose={() => setLoginPromptVisible(false)}
        transparent
        visible={loginPromptVisible}
      >
        <Pressable style={styles.modalBackdrop} onPress={() => setLoginPromptVisible(false)}>
          <Pressable
            accessibilityViewIsModal
            onPress={(event) => event.stopPropagation()}
            style={styles.modalCard}
          >
            <View style={styles.modalIcon}>
              <Feather name="lock" size={25} color={colors.text} />
            </View>
            <Text style={styles.modalTitle}>Login to continue</Text>
            <Text style={styles.modalBody}>
              Member services are available after you log in or create an account.
            </Text>
            <Button title="Continue to login" onPress={continueToLogin} />
            <Button
              title="Not now"
              variant="outline"
              onPress={() => setLoginPromptVisible(false)}
            />
          </Pressable>
        </Pressable>
      </Modal>
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
  intro: {
    gap: spacing.xs,
  },
  eyebrow: {
    color: colors.primaryDark,
    ...typography.overline,
  },
  title: {
    color: colors.text,
    ...typography.h1,
  },
  body: {
    color: colors.textMuted,
    ...typography.body,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tile: {
    width: '48%',
    minHeight: 150,
    flexGrow: 1,
    flexBasis: 145,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
    justifyContent: 'space-between',
  },
  tilePressed: {
    opacity: 0.72,
  },
  tileIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  tileLabel: {
    color: colors.text,
    ...typography.h3,
    marginVertical: spacing.sm,
  },
  memberCard: {
    minHeight: 84,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderRadius: 12,
    backgroundColor: colors.primary,
    padding: spacing.md,
  },
  memberCopy: {
    flex: 1,
  },
  memberTitle: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  memberBody: {
    color: colors.text,
    ...typography.caption,
    marginTop: 2,
  },
  modalBackdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.overlay,
    padding: spacing.xl,
  },
  modalCard: {
    width: '100%',
    maxWidth: 360,
    borderRadius: radius.lg,
    backgroundColor: colors.background,
    padding: spacing.xl,
    alignItems: 'center',
    gap: spacing.md,
  },
  modalIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  modalTitle: {
    color: colors.text,
    ...typography.h2,
    textAlign: 'center',
  },
  modalBody: {
    color: colors.textMuted,
    ...typography.body,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
});
