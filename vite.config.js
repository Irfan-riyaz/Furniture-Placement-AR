import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'Furniture-Placement-AR',   // 👈 EXACTLY your repo name
  plugins: [react()],
})
