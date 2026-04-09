/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a', // Bold Green
        secondary: '#0d9488', // Teal
        light: {
          900: '#ffffff',
          800: '#f8fafc',
          700: '#f1f5f9',
        },
        dark: {
          900: '#212121',
          800: '#141414',
          700: '#1f1f1f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
