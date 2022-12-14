/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        skill: "#f8f6f8",
        background: "#121113",
        linear: "rgba(0, 0, 0, 0.5)",
        hire: "#232123",
        cardHover: "rgba(0, 0, 0, 0.7)",
      },
      colors: {
        button: "#E6780D",
        title: "#FF830D",
        twitter: "#55ACEE",
        linkedin: "#0A66C2",
      },
      height: {
        card: "40vh",
        large: "70vh",
      },
      width: {
        small: "23%",
        medium: "30%",
        form: "49%",
        formLg: "45%",
        side: "256px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
