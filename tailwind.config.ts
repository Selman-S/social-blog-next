import { red } from '@mui/material/colors'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      main: "#1877f2",
      loginbg: "#f0f2f5",
      white: "#ffffff",
      borderGray: " #dddfe2",
      black: "#000000",
      btnGreen: "#42b72a",
      red: "#ff0000",
      linkColor: "#65676b",
      textBlack: "#050505",
      userLinkHover: "#E3E5E8",
      activeLink: "#0866ff",
      linkGreen: "#00a400",
      btnbg: "#ebf5ff",
      btnbgHover: "#dceaf9",
      btnText: "#0054d1",
      btnGraybg: "#e4e6eb",
      iconBg:"#d8dadf",
    },
  },
  plugins: [],
}
export default config
