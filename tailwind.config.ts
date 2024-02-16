import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#0E2515",
        jungleGreen: "#25392B",
        limeGreen: "#c4f135",
        lightGreen: "#00c88c",
        lightGray: "#D1D5D1"
      }
    },
  },
  plugins: [],
};
export default config;
