import baseConfig from "@belkit/tailwind-theme/tailwind.config";
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [baseConfig],
  content: ["./src/**/*.{ts,tsx}"],
};

export default config;
