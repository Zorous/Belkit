import type { Config } from "tailwindcss";


const baseConfig: Config = {
  content: ["../../apps/web/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
};

export default baseConfig;