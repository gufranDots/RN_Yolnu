import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '../../theme/tokens';

export function Button({
  title,
  subtitle,
  variant = 'primary',
  onPress,
  disabled,
  icon,
  iconPosition = 'left',
  style,
  compact = false,
  centered = false,
  titleNumberOfLines,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        compact && styles.compact,
        centered && styles.centered,
        styles[variant],
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <View style={[styles.row, centered && styles.rowCentered]}>
        {icon && iconPosition === 'left' ? <View style={styles.icon}>{icon}</View> : null}
        <View style={[styles.content, centered && styles.contentCentered]}>
          <Text
            numberOfLines={titleNumberOfLines}
            style={[
              styles.title,
              centered && styles.titleCentered,
              variant === 'secondary' || variant === 'outline' ? styles.titleDark : null,
            ]}
          >
            {title}
          </Text>
          {subtitle ? (
            <Text style={[styles.subtitle, variant === 'secondary' || variant === 'outline' ? styles.subtitleDark : null]}>
              {subtitle}
            </Text>
          ) : null}
        </View>
        {icon && iconPosition === 'right' ? <View style={styles.icon}>{icon}</View> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    minHeight: 52,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  compact: {
    minHeight: 44,
    paddingHorizontal: spacing.xl,
    paddingVertical: 10,
  },
  centered: {
    width: 'auto',
    alignSelf: 'center',
  },
  rowCentered: {
    justifyContent: 'center',
  },
  contentCentered: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    alignItems: 'center',
  },
  titleCentered: {
    textAlign: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surfaceAlt,
  },
  outline: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  disabled: {
    opacity: 0.55,
  },
  pressed: {
    transform: [{ scale: 0.99 }],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  icon: {
    width: 20,
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  titleDark: {
    color: colors.text,
  },
  subtitle: {
    marginTop: 2,
    color: colors.textMuted,
    ...typography.caption,
  },
  subtitleDark: {
    color: colors.textMuted,
  },
});
