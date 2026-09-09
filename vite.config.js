import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

function configurePathAlias(rootDir) {
  return fileURLToPath(new URL(rootDir, import.meta.url));
}

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": configurePathAlias("./src"),
      "@/components/": configurePathAlias("./src/components"),
      "@/utils/": configurePathAlias("./src/utils"),
    },
  },
});
