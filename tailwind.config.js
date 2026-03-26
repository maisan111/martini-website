/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
        Hind_Guntur: ['Hind Guntur', 'sans-serif'],
        Hind_Vadodara: ['Hind Vadodara', 'sans-serif'],
        computerist: ['var(--font-computerist)'],
        Audiowide: ['Audiowide', 'sans-serif'],
        CaviarDreams: ['var(--font-CaviarDreams)'],
        Sanseriffic: ['var(--font-Sanseriffic)'],
        //arabic fonts
        OMAR: ['var(--font-OMAR)'],
        Alharoni: ['var(--font-Alharoni)'],
        mohb: ['var(--font-mohb)'],
        Camel: ['var(--font-Camel)'],
        CamelR: ['var(--font-CamelR)'],
        Lady: ['var(--font-Lady)'],
        Alhura: ['var(--font-Alhura)'],
        Oman: ['var(--font-Oman)'],
        
      },
    },
  },
  plugins: [],
};
