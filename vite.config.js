import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/furniture-placement/', // ⬅️ EXACTLY your GitHub repo name, with slashes
  plugins: [react()],
})
