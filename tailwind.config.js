// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "rgba(248, 248, 248, 1)", // You can name it "customGray" or any name you prefer
      },
    },
  },
  plugins: [],
};
