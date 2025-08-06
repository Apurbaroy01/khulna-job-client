import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        customBg: '#fef7f3',      // Light Peach
        jobPrimary: '#1DBF73',   // Green for buttons or highlights
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
