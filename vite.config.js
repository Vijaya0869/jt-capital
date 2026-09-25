import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the root at www.jtcapitalgrp.com (public/CNAME). The Pages
// workflow still passes BASE_PATH, so the github.io/jt-capital/ URL also
// works if the custom domain is ever removed.
export default defineConfig({
  base: process.env.BASE_PATH ? `${process.env.BASE_PATH.replace(/\/$/, '')}/` : '/',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false },
})
