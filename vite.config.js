import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Path to your src folder
const root = path.resolve(__dirname, "src");
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root, // Map @ to ./src
    },
  },
});