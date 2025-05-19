// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a192f',  // Dark navy background
          light: '#112240',  // Lighter navy
        },
        secondary: {
          teal: '#64ffda',  // Teal accent
          slate: '#8892b0',  // Slate text
          light: '#ccd6f6',  // Light slate for headings
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}