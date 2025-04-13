import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**', '!src/**/*.md'],
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
      output: {
        filename: {
          js: '[name].js',
        },
        distPath: {
          root: './esm',
        },
      },
    },
    {
      bundle: false,
      dts: true,
      format: 'cjs',
      output: {
        filename: {
          js: '[name].js',
        },
        distPath: {
          root: './lib',
        },
      },
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [pluginReact()],
});
