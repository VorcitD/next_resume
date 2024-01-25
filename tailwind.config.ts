import { Cormorant } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'serif':['Cormorant'],
      'sans':['Quicksand', 'sans-serif']
    },
    extend: {
      brightness: {
        35: '.35',
      },
      height:{
        '630':'630px'
      },
      colors:{
        primary:'#232323',
        secondary:'#E86962',
        tertiary:'#282828',
        fontPrimary:'#F0F0F0',
        fontSecondary:'#AAAAAA'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
