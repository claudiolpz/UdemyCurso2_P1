import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()], 
  server: {
    host: true, // Permite el acceso desde otras máquinas en la red loca
  },
  build: {
    chunkSizeWarningLimit: 2000, // Aumenta el límite de tamaño de chunk a 1600 KB
  },
})