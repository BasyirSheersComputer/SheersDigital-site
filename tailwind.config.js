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
        // Professional Teal (Primary Brand Color)
        teal: {
          50: '#E6F7F7',
          100: '#B3E8E8',
          200: '#80D8D8',
          300: '#4DC9C9',
          400: '#26B8B8',
          500: '#00A7A7',
          600: '#009090',
          700: '#007878',
          800: '#006060',
          900: '#004848',
        },
        // Neutral Grays (Clean, Professional)
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
        // CTA Orange (Action/Conversion)
        orange: {
          50: '#FFF3ED',
          100: '#FFE4D6',
          200: '#FFC7AC',
          300: '#FFA478',
          400: '#FF7842',
          500: '#FF6B35',
          600: '#E55A2B',
          700: '#CC4F24',
          800: '#B3441F',
          900: '#993A1A',
        },
        // Success Green
        green: {
          50: '#E8F7ED',
          100: '#C4E8D1',
          200: '#9CD9B4',
          300: '#74CA97',
          400: '#53BC81',
          500: '#2D9F4B',
          600: '#288B40',
          700: '#227734',
          800: '#1C6229',
          900: '#174E1E',
        },
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
