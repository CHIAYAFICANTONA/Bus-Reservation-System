/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4fd1c5',
          DEFAULT: '#38b2ac',
          dark: '#2c7a7b',
        },
        secondary: {
          light: '#fbd38d',
          DEFAULT: '#f6ad55',
          dark: '#dd6b20',
        },
        accent: {
          light: '#f687b3',
          DEFAULT: '#ed64a6',
          dark: '#d53f8c',
        },
        background: '#f7fafc',
        surface: '#ffffff',
        error: '#e53e3e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
}

