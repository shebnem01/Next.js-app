import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-red": "#c32929",
        "primary-dark": "#161c28",
        "secondary-red": "#FB7F77",
        "text-light": "#FFFCF5",
        "border-gray": "#E6E6E6",
        "bg-gray": "#FCFCFD",
        "bg-gray-2": "#CCCCCC",
        'bg-light': '#FBFBFB',
        "text-gray": "#B1B7C1",
        "text-dark": "#666666",
        "blur-black": "rgba(0, 0, 0, 0.25)",
        "blur-black-2": "rgba(0, 0, 0, 0.07)",
        'light-pink': '#FFF7E5',
        'text-gray-2': '#757575',
        'bg-light-2': '#F2F2F2',
        'text-gray-3': '#6A6A6A',
        'green': "#3BE157",
        'blue': ''
      },
    },
  },
  plugins: [],
};
export default config;
