/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('https://i.ibb.co.com/fr9PFGk/Frame-1707477989.png')",
        "popular-bg":
          "url('https://i.ibb.co.com/4SvKDKq/Frame-1707478012.png')",
        "booking-bg":
          "url('https://i.ibb.co.com/9yYLK4b/Frame-1707478003.png')",
      },
    },
  },
  plugins: [],
};
