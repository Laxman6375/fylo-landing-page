/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Open_Sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        DarkBlue: "hsl(217, 28%, 15%)",
        mainDark: "hsl(218, 28%, 13%)",
        footerDark: "hsl(216, 53%, 9%)",
        testimonialDark: "hsl(219, 30%, 18%)",
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        LightRed: " hsl(0, 100%, 63%)",
        White: "hsl(0, 0%, 100%)",
      },
      
    },
  },

  plugins: [],
};

