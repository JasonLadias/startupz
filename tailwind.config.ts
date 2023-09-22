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
    colors: {
      "brand-green": "#46B8C8",
      "brand-orange": "#FB8958",
      "text-grey": "#3d4f5c",
      ...require("tailwindcss/colors"),
    },
    animation: {
      'slideInRight': 'slideInRight 1s forwards'
    }
  },
  plugins: [],
};
export default config;
