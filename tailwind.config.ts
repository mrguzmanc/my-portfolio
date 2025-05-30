import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Your custom color palette
        primary: {
          50: '#f7f8f4',
          100: '#eef0e7',
          200: '#dde2d1',
          300: '#c5ceb0',
          400: '#a8b489',
          500: '#949D6A', // Your moss green
          600: '#7a8356',
          700: '#626846',
          800: '#4f543a',
          900: '#424632',
          950: '#232518',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
    },
  },
  plugins: [],
};

export default config;
