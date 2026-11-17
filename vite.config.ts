import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const googleVerification =
    env.VITE_GOOGLE_SITE_VERIFICATION ||
    env.GOOGLE_SITE_VERIFICATION ||
    process.env.VITE_GOOGLE_SITE_VERIFICATION ||
    process.env.GOOGLE_SITE_VERIFICATION ||
    '';

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'maxraqam-public-path-compat',
        enforce: 'pre',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            if (req.url && req.url.startsWith('/public/')) {
              req.url = req.url.replace(/^\/public\//, '/');
            }
            next();
          });
        },
        transformIndexHtml: {
          order: 'pre',
          handler(html) {
            return html
              .replace(/(href|src)=["']\/public\//g, '$1="/')
              .replace(/url\(['"]?\/public\//g, "url('/");
          },
        },
        closeBundle() {
          const publicDir = path.resolve(__dirname, 'public');
          const distPublicDir = path.resolve(__dirname, 'dist', 'public');
          if (fs.existsSync(publicDir)) {
            fs.cpSync(publicDir, distPublicDir, {recursive: true, force: true});
          }
        },
      },
      {
        name: 'maxraqam-seo-verification',
        transformIndexHtml(html) {
          if (!googleVerification.trim()) return html;
          const metaTag = `    <meta name="google-site-verification" content="${googleVerification.trim()}">\n`;
          return html.replace('</head>', `${metaTag}</head>`);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

