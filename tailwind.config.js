/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: 'hsl(210 40% 98%)',
          foreground: 'hsl(210 40% 9.8%)',
        },
        'background': 'hsl(0 0% 3.9%)',
        'foreground': 'hsl(0 0% 98%)',
        'card': 'hsl(0 0% 7%)',
        'muted': {
          DEFAULT: 'hsl(0 0% 14.9%)',
          foreground: 'hsl(0 0% 63.9%)',
        },
        'accent': {
          DEFAULT: 'hsl(210 40% 50%)',
          foreground: 'hsl(210 40% 98%)',
        },
        'border': 'hsl(0 0% 14.9%)',
        'input': 'hsl(0 0% 14.9%)',
        'ring': 'hsl(210 40% 50%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
