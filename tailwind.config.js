/** @type {import('tailwindcss').Config} */
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  //darkMode: 'class',
  // theme: {
  //   extend: {
  //     colors: {
  //       black: '#222222',
  //       white: '#ffffff',
  //     },
  //   },
  // },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  darkMode: ['class','[data-theme="dark"]']
}

