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
        "customize-design": "url('/images/customize.jpg')",
        "blog-card": "url('/images/blogcard.jpg')",
      },
      colors: {
        primary: "#f3f3f3",
        // primary: "#f3f3f3",
        secondary: "#97a7b9",
        dark: "#3d444a",
        blue: "#306dc9",
      },
    },
  },
  plugins: [],
};
export default config;
