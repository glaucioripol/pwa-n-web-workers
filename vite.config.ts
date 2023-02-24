import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const defaultColorTheme = "#cbd5e1";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        sourcemap: true,
        globPatterns: ["**/*.{js,css,html,png,jpg,gif,svg,woff2}"],
        globDirectory: "/dev-dist",
        globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "PWA Offline",
        short_name: "PWA Offline",
        description: "Learning how to make a PWA with vite PWA",
        theme_color: defaultColorTheme,
        start_url: "/",
        display: "standalone",
        background_color: defaultColorTheme,
        lang: "pt-BR",
        orientation: "portrait",
        screenshots: [
          // this is important for the PWA to be accepted in the store
        ],
        icons: [
          // generate icons with https://realfaviconxgenerator.net/
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
