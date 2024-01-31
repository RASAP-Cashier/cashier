/// <reference types='vitest' />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },

    server: {
      port: 4200,
      host: 'localhost',
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [
      react({
        babel: {
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            [
              '@babel/plugin-proposal-class-properties',
              { loose: true },
            ],
          ],
        },
      }), nxViteTsPaths(),
    ],

    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  };
});
