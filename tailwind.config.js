/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#333333',
        secondary: '#FFFFFF',
        background: '#F5F5F5',
        accent: {
          1: '#D4AC0D',
          2: '#E5E7E9'
        }
      },
      fontSize: {
        'heading': ['2.5rem', {
          fontWeight: 'bold',
          textTransform: 'uppercase',
          lineHeight: '1.2'
        }],
        'subheading': ['1.2rem', {
          fontWeight: 'normal',
          textTransform: 'none',
          lineHeight: '1.4'
        }],
        'body': ['1rem', {
          lineHeight: '1.5'
        }]
      },
      spacing: {
        'layout-padding': '20px',
        'layout-margin': '10px',
      },
      borderRadius: {
        'layout': '5px',
        'card': '10px',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
