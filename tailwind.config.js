/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.6rem",
    },
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("not-last-child", "&:not(:last-child)");
    },
  ],
};
