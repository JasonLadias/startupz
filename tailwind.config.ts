import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-green": "#46B8C8",
        "brand-orange": "#FB8958",
        "text-gray": "#3d4f5c",
        "back-gray": "#fbfafa",
        ...require("tailwindcss/colors"),
      },
      animation: {
        slideInRight: "slideInRight 1s forwards",
        "custom-bounce": "custom-bounce 2s infinite",
      },
      maxWidth: {
        "1/2": "50%",
        "2/3": "66%",
        "32rem": "32rem",
      },
      margin: {
        "30vh": "30vh",
      },
      padding: {
        "11rem": "11rem",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "4px",
        sm: "16px",
        md: "1.5rem",
        lg: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
