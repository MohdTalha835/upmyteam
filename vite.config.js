import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
    build: {
    rollupOptions: {
      external: [], // Make sure this is empty or fontawesome is NOT listed
    },
  },
});