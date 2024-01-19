import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/

const root = resolve(__dirname, './src')
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(root),
      '@assets': resolve(root, 'assets'),
      '@types': resolve(root, 'types'),
      '@styles': resolve(root, 'styles'),
      '@modules': resolve(root, 'modules'),
      '@components': resolve(root, './layout/components'),
    },
  },
  plugins: [react()],
})
