import React, { useCallback, useRef, useState } from 'react';
import { FlatList, InteractionManager, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { OnboardingPage } from '../../components/onboarding/OnboardingPage';
import { Button } from '../../components/ui/Button';
import { useDemo } from '../../context/DemoContext';
import { onboardingPages } from '../../data/onboarding';
import { AuthRoutes } from '../../navigation/routes';
import { colors, spacing, typography } from '../../theme/tokens';

export function OnboardingScreen() {
  const navigation = useNavigation();
  const listRef = useRef(null);
  const currentIndexRef = useRef(0);
  const { completeOnboarding } = useDemo();
  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const isLastPage = currentIndex === onboardingPages.length - 1;

  useFocusEffect(
    useCallback(() => {
      if (!pageWidth) {
        return undefined;
      }

      const task = InteractionManager.runAfterInteractions(() => {
        listRef.current?.scrollToOffset({
          offset: currentIndexRef.current * pageWidth,
          animated: false,
        });
      });

      return () => task.cancel();
    }, [pageWidth])
  );

  const finishOnboarding = useCallback(async () => {
    if (isFinishing) {
      return;
    }

    setIsFinishing(true);
    await completeOnboarding();
    navigation.reset({
      index: 0,
      routes: [{ name: AuthRoutes.Login }],
    });
  }, [completeOnboarding, isFinishing, navigation]);

  const goToPage = useCallback(
    (index) => {
      const nextIndex = Math.max(0, Math.min(index, onboardingPages.length - 1));
      listRef.current?.scrollToOffset({
        offset: nextIndex * pageWidth,
        animated: true,
      });
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
    },
    [pageWidth]
  );

  const handleNext = () => {
    if (isLastPage) {
      finishOnboarding();
      return;
    }
    goToPage(currentIndex + 1);
  };

  const handleMomentumEnd = (event) => {
    if (!pageWidth) {
      return;
    }
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / pageWidth);
    currentIndexRef.current = nextIndex;
    setCurrentIndex(nextIndex);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom', 'left', 'right']}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.brand}>Yolnu</Text>
          <Text style={styles.brandSubtitle}>Working with Yolŋu</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          disabled={isFinishing}
          onPress={finishOnboarding}
          hitSlop={10}
          style={({ pressed }) => [styles.skipButton, pressed && styles.pressed]}
        >
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>

      <View
        style={styles.pager}
        onLayout={(event) => {
          setPageWidth(event.nativeEvent.layout.width);
          setPageHeight(event.nativeEvent.layout.height);
        }}
      >
        {pageWidth > 0 && pageHeight > 0 ? (
          <FlatList
            ref={listRef}
            data={onboardingPages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <OnboardingPage page={item} width={pageWidth} height={pageHeight} />
            )}
            horizontal
            pagingEnabled
            directionalLockEnabled
            bounces={false}
            decelerationRate="fast"
            contentContainerStyle={styles.pagerContent}
            onMomentumScrollEnd={handleMomentumEnd}
            showsHorizontalScrollIndicator={false}
            getItemLayout={(_, index) => ({
              length: pageWidth,
              offset: pageWidth * index,
              index,
            })}
          />
        ) : null}
      </View>

      <View style={styles.footer}>
        <View style={styles.pagination} accessibilityRole="adjustable">
          {onboardingPages.map((page, index) => (
            <View
              key={page.id}
              style={[styles.dot, index === currentIndex && styles.dotActive]}
            />
          ))}
        </View>
        <View style={styles.buttonRow}>
          {currentIndex > 0 ? (
            <Pressable
              accessibilityRole="button"
              onPress={() => goToPage(currentIndex - 1)}
              style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
            >
              <Ionicons name="arrow-back" size={18} color={colors.text} />
              <Text style={styles.backText}>Back</Text>
            </Pressable>
          ) : (
            <View style={styles.backButton} />
          )}
          <Button
            compact
            centered
            disabled={isFinishing}
            title={isLastPage ? 'Continue to Login' : 'Next'}
            titleNumberOfLines={1}
            onPress={handleNext}
            iconPosition="right"
            icon={
              <Ionicons
                name={isLastPage ? 'log-in-outline' : 'arrow-forward'}
                size={18}
                color={colors.text}
              />
            }
            style={styles.nextButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    minHeight: 58,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
  },
  brand: {
    color: colors.text,
    ...typography.h3,
  },
  brandSubtitle: {
    color: colors.textMuted,
    ...typography.caption,
  },
  skipButton: {
    minWidth: 52,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipText: {
    color: colors.primaryDark,
    ...typography.bodyStrong,
  },
  pager: {
    flex: 1,
  },
  pagerContent: {
    alignItems: 'stretch',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xs,
    gap: spacing.sm,
  },
  pagination: {
    minHeight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  dotActive: {
    width: 22,
    backgroundColor: colors.primary,
  },
  buttonRow: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  backButton: {
    minWidth: 76,
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  backText: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  nextButton: {
    flexShrink: 1,
    minWidth: 104,
  },
  pressed: {
    opacity: 0.65,
  },
});
