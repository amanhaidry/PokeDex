import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PokeDex/', // Add this line to match the repository name
  plugins: [react()],
})
