/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#475BE8",

        light: "#FCFCFC",
        textLight: "#11142D",
        textLight2nd: "#808191",
        divideLight: "#E4E4E4",

        dark: "#1A1D1F",
        textDark: "#EFEFEF",
        textDark2nd: "#6F767E",
        dividerDark: "#272B30",
      },
    },
  },
  plugins: [],
};
