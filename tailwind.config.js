/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paper-white': '#ffffff',
        'ink-black': '#0e0e0e',
        'paper-gray': '#f5f5f5',
        'grey-10': '#1a1a1a',
        'grey-15': '#262626',
        'grey-90': '#e5e5e5',
        'green-10': '#16a34a',
        'green-hover': '#15803d',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

