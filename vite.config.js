import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 8081,
    open: false,
    cors: {
      origin: '*'
    },
    hmr: {
      port: 8080,
      path: 'sockjs-node'
    }
  },
  base: "/proxy/8081/",
  fs: {
    strict: true,
  },
})