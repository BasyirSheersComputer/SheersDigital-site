/**
 * Professional Design System - AG1 Inspired
 * Clean, sophisticated, outcome-focused
 */

export const colors = {
  // Primary - Professional Navy/Teal (replacing bright gradients)
  primary: {
    50: '#E6F7F7',
    100: '#B3E8E8',
    200: '#80D8D8',
    300: '#4DC9C9',
    400: '#26B8B8',
    500: '#00A7A7', // Main brand color
    600: '#009090',
    700: '#007878',
    800: '#006060',
    900: '#004848',
  },
  
  // Neutral - Modern grays
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Accent - Warm earth tones
  accent: {
    orange: '#FF6B35', // For CTAs and highlights
    green: '#2D9F4B',  // For success/positive metrics
    amber: '#F59E0B',  // For warnings/alerts
  },
  
  // Semantic
  success: '#2D9F4B',
  error: '#DC2626',
  warning: '#F59E0B',
  info: '#00A7A7',
  
  // Background
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F5F5F5',
    dark: '#171717',
  },
  
  // Text
  text: {
    primary: '#171717',
    secondary: '#525252',
    tertiary: '#737373',
    inverse: '#FFFFFF',
  }
};

export const typography = {
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const spacing = {
  0: '0',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
  24: '6rem',    // 96px
  32: '8rem',    // 128px
};

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px
  base: '0.5rem',  // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  '2xl': '2rem',   // 32px
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  none: 'none',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Component-specific tokens
export const components = {
  button: {
    primary: {
      background: colors.accent.orange,
      hover: '#E55A2B',
      active: '#CC4F24',
      text: colors.text.inverse,
    },
    secondary: {
      background: colors.neutral[100],
      hover: colors.neutral[200],
      active: colors.neutral[300],
      text: colors.text.primary,
    },
    outline: {
      border: colors.primary[500],
      hover: colors.primary[50],
      text: colors.primary[500],
    },
  },
  
  input: {
    background: colors.background.primary,
    border: colors.neutral[300],
    borderFocus: colors.primary[500],
    text: colors.text.primary,
    placeholder: colors.text.tertiary,
  },
  
  card: {
    background: colors.background.primary,
    border: colors.neutral[200],
    shadow: shadows.md,
  },
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  components,
};

