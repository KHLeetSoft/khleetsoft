import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// Optional local HTTPS for `vite` / `vite preview` only — set in .env if you use it.
// `vite build` runs with NODE_ENV=production; never read cert files unless paths exist.
function readHttpsOption() {
  const keyPath = process.env.SSL_KEY_PATH;
  const certPath = process.env.SSL_CERT_PATH;
  if (typeof keyPath !== "string" || typeof certPath !== "string") return false;
  const k = keyPath.trim();
  const c = certPath.trim();
  if (!k || !c) return false;
  try {
    return {
      key: fs.readFileSync(k),
      cert: fs.readFileSync(c),
    };
  } catch {
    return false;
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    https: readHttpsOption(),
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          mui: ["@mui/material", "@mui/icons-material"],
        },
      },
    },
  },
});
