module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257E6",
        },
      },
      screens: {
        xsm: { max: "399px" },
        mobile: { max: "767px" },
        st415: { max: "415px" },
      },
      boxShadow: {
        widget: "0 8px 32px 0 rgba(0,0,0,0.15)",
        widget_button: "0 0 15px 1px #8257e64d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
