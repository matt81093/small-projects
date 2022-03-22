// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    optimizedDeps: {
        include: ['three']
    },
    server: {
        hmr: {
            port: 443
        }
    }
    // config options
})
  