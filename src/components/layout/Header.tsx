import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuth } from '../../context/AuthContext';
import { useDemo } from '../../context/DemoContext';
import { TabRoutes } from '../../navigation/routes';
import { colors, radius, spacing, typography } from '../../theme/tokens';

type HeaderProps = {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showProfile?: boolean;
  showLogin?: boolean;
  onLoginPress?: () => void;
  right?: React.ReactNode;
};

const memberItems = [
  { label: 'Profile', icon: 'user', route: TabRoutes.Profile },
  { label: 'View Card', icon: 'credit-card', route: TabRoutes.ViewCard },
  { label: 'Messages', icon: 'message-circle', route: TabRoutes.Messages },
  { label: 'Apply / Renew', icon: 'file-text', route: TabRoutes.ApplyRenew },
] as const;

export function Header({
  title,
  showBack = false,
  onBack,
  showProfile = false,
  showLogin = false,
  onLoginPress,
  right,
}: HeaderProps) {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const { logout } = useAuth();
  const { profile } = useDemo() as {
    profile?: { name?: string; email?: string };
  };
  const [menuVisible, setMenuVisible] = useState(false);

  const initials = useMemo(
    () =>
      String(profile?.name || 'Member')
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase(),
    [profile?.name]
  );

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const openMemberRoute = (route: string) => {
    setMenuVisible(false);
    navigation.navigate(route);
  };

  return (
    <>
      <View style={[styles.container, { paddingTop: insets.top + spacing.xs }]}>
        <View style={styles.row}>
          <View style={styles.left}>
            {showBack ? (
              <Pressable
                accessibilityLabel="Go back"
                accessibilityRole="button"
                hitSlop={8}
                onPress={handleBack}
                style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
              >
                <Feather name="chevron-left" size={24} color={colors.text} />
              </Pressable>
            ) : (
              <View style={styles.logo}>
                <Feather name="compass" size={23} color={colors.text} />
              </View>
            )}
          </View>

          <View style={styles.heading}>
            <Text style={styles.brand} numberOfLines={1}>
              Yolnu
            </Text>
            {title ? (
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            ) : null}
          </View>

          <View style={styles.right}>
            {showProfile ? (
              <View accessibilityLabel="Member profile" style={styles.avatar}>
                <Text style={styles.avatarText}>{initials}</Text>
              </View>
            ) : showLogin ? (
              <Pressable
                accessibilityRole="button"
                hitSlop={8}
                onPress={onLoginPress}
                style={({ pressed }) => [styles.loginButton, pressed && styles.pressed]}
              >
                <Text style={styles.loginText}>Login</Text>
              </Pressable>
            ) : (
              right
            )}
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
        transparent
        visible={menuVisible}
      >
        <Pressable style={styles.backdrop} onPress={() => setMenuVisible(false)}>
          <Pressable
            accessibilityViewIsModal
            onPress={(event) => event.stopPropagation()}
            style={[styles.menu, { top: insets.top + 64 }]}
          >
            <Text style={styles.menuName}>{profile?.name || 'Member'}</Text>
            <Text style={styles.menuEmail}>{profile?.email}</Text>
            <View style={styles.divider} />
            {memberItems.map((item) => (
              <Pressable
                key={item.route}
                onPress={() => openMemberRoute(item.route)}
                style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemActive]}
              >
                <Feather name={item.icon} size={18} color={colors.text} />
                <Text style={styles.menuItemText}>{item.label}</Text>
              </Pressable>
            ))}
            <View style={styles.divider} />
            <Pressable
              onPress={async () => {
                setMenuVisible(false);
                await logout();
              }}
              style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemActive]}
            >
              <Feather name="log-out" size={18} color={colors.brandRed} />
              <Text style={[styles.menuItemText, styles.logoutText]}>Logout</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  row: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    width: 44,
    alignItems: 'flex-start',
  },
  heading: {
    flex: 1,
    paddingHorizontal: spacing.xs,
  },
  right: {
    minWidth: 56,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  logo: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  brand: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  title: {
    color: colors.textMuted,
    ...typography.caption,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceAlt,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  avatarText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '800',
  },
  loginButton: {
    minHeight: 40,
    justifyContent: 'center',
    paddingHorizontal: spacing.xs,
  },
  loginText: {
    color: colors.text,
    ...typography.bodyStrong,
    textDecorationLine: 'underline',
  },
  pressed: {
    opacity: 0.65,
  },
  backdrop: {
    flex: 1,
    backgroundColor: colors.overlay,
  },
  menu: {
    position: 'absolute',
    right: spacing.md,
    width: 230,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  menuName: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  menuEmail: {
    color: colors.textMuted,
    ...typography.caption,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.sm,
  },
  menuItem: {
    minHeight: 42,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  menuItemActive: {
    backgroundColor: colors.primary,
  },
  menuItemText: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  logoutText: {
    color: colors.brandRed,
  },
});
