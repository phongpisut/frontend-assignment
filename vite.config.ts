import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "/frontend-assignment/",
  test:{
    globals: true,
    environment: 'jsdom',
    css:true,
  }
})
