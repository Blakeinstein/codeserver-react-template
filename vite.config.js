import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 8081,
    open: false,
    https: true,
    cors: {
      origin: "*"
    },
    hmr: {
      host: process.env.PUBLIC_URL,
      path: '/sockjs-node'
    }
  },
  fs: {
    strict: true,
  },
})
