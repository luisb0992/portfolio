const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-dark-blue": "#19022d",
        "logo-dark-blue-200": "#2b024e",
        "logo-dark-blue-500": "#002864",
        "logo-light-blue": "#0498f4",
        "logo-light-blue-200": "#0498f4",
        "logo-light-blue-500": "#5b7dcf",
        "personal-brown-1": "#393237",
        "personal-brown-2": "#2b262a",
        "personal-gray-1": "#4733cc",
        "personal-gray-2": "#533BED",
        "personal-gray-3": "#261B6E",
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
        "slide-in-blurred-top": {
          "0%": {
            "-webkit-transform": "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
            transform: "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
            "-webkit-transform-origin": "50% 0%",
            "transform-origin": "50% 0%",
            "-webkit-filter": "blur(40px)",
            filter: "blur(40px)",
            opacity: "0",
          },
          "100%": {
            "-webkit-transform": "translateY(0) scaleY(1) scaleX(1)",
            transform: "translateY(0) scaleY(1) scaleX(1)",
            "-webkit-transform-origin": "50% 50%",
            "transform-origin": "50% 50%",
            "-webkit-filter": "blur(0)",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "swing-in-top-fwd": {
          "0%": {
            "-webkit-transform": "rotateX(-100deg)",
            transform: "rotateX(-100deg)",
            "-webkit-transform-origin": "top",
            "transform-origin": "top",
            opacity: 0,
          },

          "100%": {
            "-webkit-transform": "rotateX(0deg)",
            transform: "rotateX(0deg)",
            "-webkit-transform-origin": "top",
            "transform-origin": "top",
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.6s ease-in",
        "fade-in-down-large": "fade-in-down 1.2s ease-in",
        "slide-in-blurred-top":
          "slide-in-blurred-top 1.2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        "swing-in-top-fwd": "swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "workspace-1920": "url('/assets/img/header/workspace-1920.webp')",
      },
    },
  },
  plugins: [],
};
