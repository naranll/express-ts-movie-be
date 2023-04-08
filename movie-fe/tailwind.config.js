/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  colors: {
    red: "#fa320a",
    black: "#000",
    white: "#fff",
    gray:"#d3d3d3"
  },
  extend: {},
};
export const plugins = [];