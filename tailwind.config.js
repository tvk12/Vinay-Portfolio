/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030303",     // Deep Pitch Black
        secondary: "#0a0a0a",   // Sophisticated Dark Gray
        accent: {
          DEFAULT: "#ff4d00",   // Sunset Orange
          light: "#ff9500",    // Golden Sun
          dark: "#cc3d00",     // Burnt Orange
        },
        dark: "#050505",
        light: "#fafafa",       // Off-white for better readability
        card: "rgba(255, 255, 255, 0.03)",
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'border-trace': 'border-trace 4s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'sunset-gradient': 'linear-gradient(to right, #ff4d00, #ff9500)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}
