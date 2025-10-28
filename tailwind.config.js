/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-smooth': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.08)',
            opacity: '0.9',
            filter: 'brightness(1.3)',
          },
        },
      },
      animation: {
        'pulse-smooth': 'pulse-smooth 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
