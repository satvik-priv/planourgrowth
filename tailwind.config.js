/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E2B1D",
        background: "#0B0F0D",
        accent: "#3DFF9A",
        muted: "#A7B5AE"
      }
    }
  },
  plugins: [],
}
