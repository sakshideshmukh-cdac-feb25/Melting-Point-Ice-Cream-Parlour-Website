import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 2025,
  },
  build: {
    outDir: "dist",
  },
  base: "/", // Ensures correct routing
});
