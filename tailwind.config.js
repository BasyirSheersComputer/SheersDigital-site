/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'elegant': ['Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a4b8ff',
          400: '#7b91ff',
          500: '#4b75ff',
          600: '#3d5ce8',
          700: '#3347c4',
          800: '#2e3b9e',
          900: '#2a347e',
        },
        secondary: '#ffffff',
        tertiary: '#1a1a1a',
        accent: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
        },
        background: '#fafbfc',
        warm: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b87d',
          400: '#f5934a',
          500: '#f27022',
          600: '#e35a1a',
          700: '#bc4418',
          800: '#96371a',
          900: '#7a3019',
        }
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.5rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '2rem' }],
        'xl': ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      spacing: {
        'small': '12px',
        'medium': '24px',
        'large': '48px',
        'xl': '64px',
        '2xl': '80px',
      },
      maxWidth: {
        'container': '1200px',
      },
      padding: {
        'container': '24px',
      },
      borderRadius: {
        'button': '8px',
        'card': '12px',
        'soft': '16px',
        'pill': '50px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'elegant': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'warm': '0 4px 20px rgba(242, 112, 34, 0.15)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #f0f4ff 0%, #e0e9ff 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fef7f0 0%, #fdecd8 100%)',
        'gradient-elegant': 'linear-gradient(135deg, #fafbfc 0%, #f1f3f4 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'gentle-bounce': 'gentleBounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }
        }
      }
    },
  },
  plugins: [],
}
