import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2c3e50',
        success: '#2ecc71',
        danger: '#e74c3c',
        warning: '#f39c12',
        info: '#1abc9c',
        light: '#f8f9fa',
        dark: '#343a40',
        gray: '#6c757d',
      },
    },
  },
  plugins: [],
};

export default config; 