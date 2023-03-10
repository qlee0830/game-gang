module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#121212",
      gray: "#23292E",
      blue: "#3b82f6",
      blue__text: "#5183E8",
      blue__bg: "#1d4ed8",
      white: "#FFFFFF",
      green: "#22c55e",
      red: "#dc2626",
      yellow: "#FFD700",
      violet: "#7c3aed",
      emerald: "#10b981",
      sky: "#0ea5e9",
      indigo: "#6366f1",
      purple: "#a855f7",
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
