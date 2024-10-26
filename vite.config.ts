import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

const config: UserConfig = {
  plugins: [
    react(),
  ],
  server: {
    host: "0.0.0.0"
  }
}


export default defineConfig(config)
