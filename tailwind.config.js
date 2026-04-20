/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#201d1b",
        secondary: "#f6c331",
        accent: {
          DEFAULT: "#d2b5f4",
          light: "#ecdffd",
          dark: "#b695de",
        },
        canvas: "#ede3ff",
        surface: "#fffdfa",
        muted: "#6f6b73",
        ink: "#201d1b",
        subtle: "#cfc8dc",
        light: "#fffdfa",
        card: "#fffdfa",
        border: "#201d1b",
        mustard: "#f6c331",
        lavender: "#e7dcff",
        lavenderStrong: "#d2b5f4",
        blueSoft: "#dfe6f6",
        pinkSoft: "#f7e3ea",
        mintSoft: "#96d6bb",
        yellowSoft: "#ffd85a",
        greenDark: "#0d4d23",
        redSoft: "#ef9ba3",
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
        display: ['Figtree', 'sans-serif'],
        signature: ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(180deg, #f6c331 0%, #d9a910 100%)',
      },
      boxShadow: {
        'glass': '6px 6px 0 rgba(32, 29, 27, 0.12)',
        'outline': '4px 4px 0 rgba(32, 29, 27, 0.14)',
      },
    },
  },
  plugins: [],
}
