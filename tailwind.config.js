/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['"Great Vibes"', 'cursive'],
        'book': ['"Crimson Pro"', 'serif'],
        'title': ['"Playfair Display"', 'serif'],
      },
      colors: {
        paper: "#fdf6e3", // Solarized cream
        "paper-dark": "#eee8d5",
        ink: "#2c241b",   // Deep brown-black
        "ink-light": "#5c554f",
        gold: "#c5a059",
        "gold-dark": "#9c7c3e",
      },
      backgroundImage: {
        'paper-texture': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
      }
    },
  },
  plugins: [],
}
