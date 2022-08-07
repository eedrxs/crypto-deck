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
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
}
