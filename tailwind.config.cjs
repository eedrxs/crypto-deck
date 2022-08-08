/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      firs: ['"TT Firs Neue"'],
      proxima: ['"Proxima Nova"'],
    },
    extend: {
      colors: {
        "crypto-blue": "#125BC9",
        scrollbar: "#d9d9d9a4",
      },
      screens: {
        "x-sm": "425px",
        "x-md": "950px",
        "x-lg": "1200px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
}
