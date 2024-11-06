import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', //add this
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#F6F4FE',
        foreground: '#8557db',
        'maincolor': {
          '50': '#f6f4fe',
          '100': '#eeebfc',
          '200': '#dfdafa',
          '300': '#c8bdf5',
          '400': '#ab97ee',
          '500': '#906de5',
          '600': '#8557db',
          '700': '#6e3cc5',
          '800': '#5d32a5',
          '900': '#4d2a88',
          '950': '#30195c',
        },
      },
    },
  },
  plugins: [],
};
export default config;
