/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00", // Orange shade
        secondary: "#FF8C00", // Darker orange
        accent: "#FFA500", // Light orange
        dark: "#1F2937",
        light: "#F9FAFB",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
        'pattern': "url('/src/assets/pattern.png')",
      },
    },
  },
  plugins: [],
}

