import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Path to your src folder
const root = path.resolve(__dirname, "src");
const assets = path.resolve(__dirname, "src/assets");
const components = path.resolve(__dirname, "src/components");
const contexts = path.resolve(__dirname, "src/contexts");
const layouts = path.resolve(__dirname, "src/layouts");
const theme = path.resolve(__dirname, "src/theme");
const variables = path.resolve(__dirname, "src/variables");
const views = path.resolve(__dirname, "src/views");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root, // Map @ to ./src
      "@assets": assets,
      "@components": components,
      "@contexts": contexts,
      "@layouts": layouts,
      "@theme": theme,
      "@variables": variables,
      "@views": views,
    },
  },
});