module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#121212",
      gray: "#23292E",
      blue: "#0C8CE9",
      blue__text: "#5183E8",
      white: "#FFFFFF",
      green: "#008000",
      red: "#DC143C",
      yellow: "#FFD700",
    },
    translate: {
      // defaults to {}
      "1/2": "50%",
      full: "100%",
      "right-up": ["100%", "-100%"],
      "3d": ["0px", "-60px", "-130px"],
    },

    extend: {},
  },
  plugins: [],
};
