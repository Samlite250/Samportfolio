/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0, 82, 57)', // rgb(0,82,57)
        secondary: '#4285F4', // Google Blue
        light: {
          900: '#ffffff',
          800: '#f7f7f7', // Subtly off-white for a cleaner look
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
