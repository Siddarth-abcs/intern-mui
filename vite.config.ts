import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      css: {
        modules: true,
      },
    },
  },
  optimizeDeps: {
    include: ['react-toastify/dist/ReactToastify.css'],
  },
});