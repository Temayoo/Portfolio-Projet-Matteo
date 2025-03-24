/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Balmy: ['Balmy', 'sans-serif'],
        SpaceMono: ['Space Mono', 'sans-serif'],
        SpaceMonoBoldItalic: ['Space Mono Bold Italic', 'sans-serif'],
        LeagueSpartan: ['League Spartan', 'sans-serif'],
        LeagueSpartanBold: ['League Spartan Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
