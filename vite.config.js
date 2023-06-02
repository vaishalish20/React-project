import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://vaishalish20.github.io/react-project/",
  plugins: [react()],
})
