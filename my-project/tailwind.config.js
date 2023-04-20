/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        onel: "url('./assets/bg/2.jpg')",
        two: "url('./assets/bg/3.jpg')",
        three: "url('./assets/bg/4.jpg')",
        four: "url('./assets/bg/5.jpg')",
        five: "url('./assets/bg/6.jpg')",
        six: "url('./assets/bg/7.jpg')",
      },
    },
  },
  plugins: [],
};
