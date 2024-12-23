/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',  // Small screens (like mobile devices)
      md: '768px',  // Medium screens (like tablets)
      lg: '1024px', // Large screens (like laptops)
      xl: '1280px', // Extra large screens (like desktops)
    },
  },
  plugins: [],
}