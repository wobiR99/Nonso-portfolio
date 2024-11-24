/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        menuBg: "url('/src/assets/wallpaper.png')",
      },
    },
  },
  plugins: [],
};
