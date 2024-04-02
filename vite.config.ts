import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  test: {
    exclude: ['**/node_modules/**', '**/ dist'],
    globals: true,
    include: ['**/*.test.ts'],
    setupFiles: ['dotenv/config'],
    snapshotFormat: {
      escapeString: false,
    },
  },
});
