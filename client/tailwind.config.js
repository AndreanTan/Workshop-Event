// /** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Grotesk: ["Space Grotesk", `sans-serif`],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
