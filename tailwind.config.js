import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#070491",
      },
      backgroundColor: {
        primary: '#101010',
      },
      textColor: {
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

