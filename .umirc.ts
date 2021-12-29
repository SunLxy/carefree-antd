import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'carefree-antd',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  proxy: {
    '/api': 'http://39.99.44.108:6666',
  },
  alias: {
    'carefree-antd-form': resolve(__dirname, './packages/form/src/index.ts'),
    'carefree-sortable': resolve(__dirname, './packages/sortable/src/index.ts'),
    'carefree-antd-edit-table': resolve(
      __dirname,
      './packages/edit-table/src/index.ts',
    ),
    'carefree-pro-table': resolve(
      __dirname,
      './packages/pro-table/src/index.tsx',
    ),
    'carefree-antd-transfer': resolve(
      __dirname,
      './packages/transfer/src/index.tsx',
    ),
    'carefree-antd-transfer-search': resolve(
      __dirname,
      './packages/transfer-search/src/index.tsx',
    ),
    'carefree-fuzzy-query': resolve(
      __dirname,
      './packages/fuzzy-query/src/index.tsx',
    ),
    //
  },
  resolve: {
    includes: [
      'docs',
      'packages/form/src',
      'packages/store/src',
      'packages/sortable/src',
      'packages/pro-table/src',
      'packages/edit-table/src',
      'packages/transfer/src',
      'packages/transfer-search/src',
      'packages/fuzzy-query/src',
    ],
  },

  // locales: [['zh-CN', '中文']],
  // navs: {
  //   'en-US': [
  //     null,
  //     {
  //       title: 'GitLab',
  //       path: '',
  //     },
  //   ],
  //   'zh-CN': [
  //     null,
  //     {
  //       title: 'GitLab',
  //       path: '',
  //     },
  //   ],
  // },
  // more config: https://d.umijs.org/config
});
