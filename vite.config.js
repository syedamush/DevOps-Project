// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DevOps-Project/', // 👈 this must match your GitHub repo name , Yes it matches , HOPE IT RUNS!!
})
