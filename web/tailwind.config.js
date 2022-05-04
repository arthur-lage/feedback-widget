module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257E6",
        },
      },
      screens: {
        'xsm': {max: '399px'},
        'mobile': {max: '767px'}
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
