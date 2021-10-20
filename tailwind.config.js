const plugin = require("tailwindcss/plugin");
const utilities = require("./src/tailwind-plugins/utilities");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#0EA5E9",
      "primary-hover": "#38BDF8",
      "primary-text": "#FFFFFF",
      "primary-text-hover": "#FFFFFF",
      secondary: "#7C3AED",
      "secondary-hover": "#8B5CF6",
      "secondary-text": "#FFFFFF",
      "secondary-text-hover": "#FFFFFF",
      tertiary: "#F97316",
      "tertiary-hover": "#FB923C",
      "tertiary-text": "#000000",
      "tertiary-text-hover": "#000000",
      neutral: "#94A3B8",
      "neutral-hover": "#CBD5E1",
      "neutral-text": "#FFFFFF",
      "neutral-text-hover": "#FFFFFF",
      error: "#DC2626",
      "error-hover": "#EF4444",
      "error-text": "#FFFFFF",
      "error-text-hover": "#FFFFFF",
      success: "#34D399",
      "success-hover": "#6EE7B7",
      "success-text": "#FFFFFF",
      "success-text-hover": "#FFFFFF",
      warning: "#FBBF24",
      "warning-hover": "#FCD34D",
      "warning-text": "#000000",
      "warning-text-hover": "#000000",
      disabled: "#E7E5E4",
      "disabled-hover": "#E7E5E4",
      "disabled-text": "#A1A1AA",
      "disabled-text-hover": "#A1A1AA",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(utilities, ["responsive", "hover"]);
    }),
  ],
};
