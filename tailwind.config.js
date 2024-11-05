// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontSize: {
      xss: "0.65rem",
    },
    fontFamily: {
      "roboto-condensed": ['"Roboto Condensed Regular"', "sans-serif"],
      "roboto-condensed-bold": ['"Roboto Condensed  Bold"', "sans-serif"],
    },

    colors: {
      primary: "var(--color-primary)",
      "primary-light": "var(--color-primary-light)",
      "primary-dark": "var(--color-primary-dark)",
      "primary-medium": "var(--color-primary-medium)",
      "primary-medium-light": "var(--color-primary-medium-light)",

      secondary: "var(--color-secondary)",
      "secondary-light": "var(--color-secondary-light)",
      "secondary-dark": "var(--color-secondary-dark)",
      "secondary-yellow": "var(--color-seconday-yellow)",

      "accent-light": "var(--color-accent-light)",
      "accent-dark": "var(--color-accent-dark)",

      "btn-home-bg": "var(--btn-home-bg)",
      "btn-away-bg": "var(--btn-away-bg)",

      background: "var(--color-background)",
      "background-light": "var(--color-background-light)",
      "background-dark": "var(--color-background-dark)",

      text: "var(--color-text)",
      "text-light": "var(--color-text-light)",
      "text-dark": "var(--color-text-dark)",
    },

    backgroundImage: {
      "primary-gradient": "var(--color-primary-gradient)",
      "primary-gradient-secondary": "var(--color-primary-gradient-secondary)",
      accent: "var(--color-accent)",
      "accent-medium-gradient": "var(--color-accent-medium-gradient)",
      "btn-home": "var(--btn-home-gradient)",
      "btn-away": "var(--btn-away-gradient)",
      "btn-place-bet": "var(--btn-place-bet-gradient)",
      "btn-cancel": "var(--btn-cancel-gradient)",
    },

    animation: {
      "headline-slide": "headlineSlide 30s linear infinite",
      blink: "blink 0.25s step-start infinite",
      colorChange: "colorChange 0.5s linear infinite",
      blinkLive: "blinkLives 0.9s step-start infinite",
      colorChangeLive: "colorChangeLive 0.5s linear infinite",
    },
    keyframes: {
      headlineSlide: {
        "0%": { transform: "translateX(180%)" }, // Start off-screen to the right
        "100%": { transform: "translateX(-180%)" }, // End off-screen to the left
      },
      blink: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
      colorChange: {
        "0%": { color: "#ff0000" }, // Red
        "50%": { color: "#00ff00" }, // Green
        "75%": { color: "#FFC0CB" }, // Pink
        "100%": { color: "#ffffff" }, // white
      },
      blinkLive: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      colorChangeLive: {
        "0%": { color: "#ffffff" },
        "100%": { color: "#e80505" },
      },
    },
  },
};
export const plugins = [];
