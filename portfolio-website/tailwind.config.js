module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // Indigo-500
        secondary: '#a21caf', // Fuchsia-700
      },
    },
  },
  plugins: [],
};
