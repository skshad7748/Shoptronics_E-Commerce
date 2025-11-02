import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/Shoptronics_E-Commerce",
  resolve: {
    alias: {
      "@atoms": path.resolve(__dirname, "./src/design-system/atoms"),
      "@molecules": path.resolve(__dirname, "./src/design-system/molecules"),
      "@organisms": path.resolve(__dirname, "./src/design-system/organisms"),
      "@templates": path.resolve(__dirname, "./src/design-system/templates"),
      "@pages": path.resolve(__dirname, "./src/design-system/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
});
