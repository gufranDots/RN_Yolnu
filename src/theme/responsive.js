import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useResponsive() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const isCompact = width < 380;

  return {
    width,
    height,
    insets,
    isCompact,
    horizontalPadding: isCompact ? 16 : 20,
    contentGap: isCompact ? 12 : 16,
    sectionGap: isCompact ? 16 : 20,
    tabBarOffset: 84 + insets.bottom,
  };
}
