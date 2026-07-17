export const colors = {
  background: '#FDF8EC',
  surface: '#FFFFFF',
  surfaceAlt: '#F3EEE5',
  primary: '#E8A93A',
  primaryDark: '#B87320',
  brandRed: '#8B1D1D',
  text: '#3B2A1E',
  textMuted: '#6B625B',
  border: '#E8DED0',
  successBg: '#DFF3E5',
  successText: '#2D6A4F',
  errorBg: '#FDE8E8',
  errorText: '#B91C1C',
  warningBg: '#FFF6DD',
  warningText: '#8A5A12',
  overlay: 'rgba(0, 0, 0, 0.4)',
} as const;

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  md: 12,
  lg: 18,
  xl: 24,
  pill: 999,
} as const;

export const shadows = {
  card: {
    shadowColor: '#4A2C00',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
} as const;

export const typography = {
  hero: { fontSize: 32, lineHeight: 38, fontWeight: '800' },
  h1: { fontSize: 28, lineHeight: 34, fontWeight: '800' },
  h2: { fontSize: 24, lineHeight: 30, fontWeight: '700' },
  h3: { fontSize: 18, lineHeight: 24, fontWeight: '700' },
  body: { fontSize: 15, lineHeight: 22, fontWeight: '400' },
  bodyStrong: { fontSize: 15, lineHeight: 22, fontWeight: '600' },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '500' },
  overline: { fontSize: 11, lineHeight: 14, fontWeight: '700', letterSpacing: 1 },
} as const;
