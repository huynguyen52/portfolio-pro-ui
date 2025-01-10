import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          100: '#ffcce5',
          200: '#ffb3d7',
          300: '#ff99c9',
          400: '#ff80bb',
          500: '#ff80bb',
          600: '#ff4da0',
          700: '#ff3392',
          800: '#ff1a85',
          900: '#ff0077',
        },
        gray: {
          100: '#FAFAFA',
          200: '#F2F2F2',
          300: '#E6E6E6',
          400: '#c2c2c2',
        },
      },
      backgroundImage: {
        'night-sky':
          "linear-gradient(0, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .5) 20%, rgba(0, 0, 0, .5) 80%, rgba(0, 0, 0, 1) 100%), url('/images/night-sky.jpg')",
      },
      animation: {
        typewriter: 'typewriter 2s steps(35) forwards',
        caret:
          'typewriter 2s steps(35) forwards, blink 1s steps(35) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
