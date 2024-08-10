import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist' // Каталог, в котором будет создана сборка проекта
  },
  plugins: [
    react(),
    viteTsconfigPaths() // Плагин для поддержки tsconfig.json paths
  ],
  resolve: {
    alias: {
      src: '/src'
    }
  }, // Настройка путей-псевдонимов (alias)
  root: './', // Указание корневой директории проекта
  server: {
    open: true // Автоматическое открытие браузера при запуске сервера разработки
  }
});
