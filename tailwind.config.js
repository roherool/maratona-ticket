/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      backgroundImage: {
        "background": "url('/background.png')",
      },
      colors: {
        brand: {
          300: "#FFF9979",
          500: "#F57D58",
        },
        neutral: {
          200: "#E1E1E6",
          800: "#202024",
          900: "#121214"
        }
      },
      dropShadow: {
        "ticket": "0 0 48px rgba(245, 125, 88, 0.25)",
      }
    },
  },
  plugins: [],
}
