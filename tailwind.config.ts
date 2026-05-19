import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1A1A1A',
        'dark-card': '#2C2C2C',
        light: '#F5F3EF',
        gold: '#C8A96E',
        grey: '#6B6B6B',
      },
      fontFamily: {
        barlow: ['var(--font-barlow-condensed)', 'sans-serif'],
        dmsans: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
}

export default config
