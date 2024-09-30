const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero1': "url('/her.svg')",
        'hero2': "url('/her2.jpg')",
        'hero3': "url('/her3.jpg')",
        'heroz': "url('/heroz.png')",
        'img1': "url('/1.png')",
        'img2': "url('/2.png')",
        'img3': "url('/3.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        spirax: ['"Spirax"', 'sans-serif'], 
        jost: ['"Jost"', 'sans-serif'], 
      },
    },
  },
  plugins: [nextui()],
};
