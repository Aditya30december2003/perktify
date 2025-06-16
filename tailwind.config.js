/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 20s linear infinite',
        marquee: 'marquee 15s linear infinite',
      },
      colors: {
      background: '#0E1117',
      card: '#1F232B',
      primary: '#38BDF8',
      secondary: '#3ABAB4', // Electric Blue
      text: '#F8FAFC',
      muted: '#94A3B8',
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      heading: ['var(--font-jakarta)'], // or grotesk
    },
    },
  },
  plugins: [],
};
