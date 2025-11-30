import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // OPTIONAL: removes the warning
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split React into its own chunk
          if (id.includes('node_modules/react')) {
            return 'react';
          }

          // Split Firebase into its own chunk (if you use Firebase)
          if (id.includes('node_modules/firebase')) {
            return 'firebase';
          }

          // Split other large node_modules automatically
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
