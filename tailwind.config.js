const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-dark-blue": "#19022d",
        "logo-dark-blue-500": "#002864",
        "logo-light-blue": "#0498f4",
        "logo-light-blue-500": "#5b7dcf",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.6s ease-in",
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "workspace-1920": "url('/src/assets/Img/header/workspace-1920.jpg')",
      },
    },
  },
  plugins: [],
};
