/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#000',
      tertiary: '#fff',
      white: '#fff',
      black: '#000',
    },
    extend: {},
  },
  plugins: [],
}

