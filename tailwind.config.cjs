/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
    colors: {
      'transparent': 'rgba(0, 0, 0, 0)',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-200': '#C4C4CC',
      'gray-100': '#E1E1E6',
      'cyan-500': '#81D8F7',
      'cyan-600': '#57D1FC',
      'red-700': '#FF2727'
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    }
  },
  plugins: [],
}
