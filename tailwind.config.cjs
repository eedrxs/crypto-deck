/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "crypto-blue": "#125BC9",
      },
    },
    fontFamily: {
      firs: ['"TT Firs Neue"'],
      proxima: ['"Proxima Nova"'],
    },
  },
  plugins: [],
}
