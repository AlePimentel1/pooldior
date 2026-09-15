// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pooldior.com.uy',
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Permite exponer el dev server por tuneles (cloudflared) sin que
      // Vite bloquee la request por el header Host.
      allowedHosts: ['.trycloudflare.com'],
    },
  },
});
