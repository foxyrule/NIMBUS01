import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f8ff',
          100: '#e7f0ff',
          500: '#1f5fba',
          700: '#173d7a',
          900: '#0f2346',
        },
      },
    },
  },
  plugins: [],
};

export default config;
