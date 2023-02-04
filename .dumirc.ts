import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'carefree-antd',
  mfsu: false,
  // favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // // mode: 'site',
  proxy: {
    '/api': 'http://39.99.44.108:6666',
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'form', dir: './packages/form/src/md' },
      { type: 'edit-table', dir: './packages/edit-table/src' },
      { type: 'pro-table', dir: './packages/pro-table/src' },
      { type: 'transfer', dir: './packages/transfer/src' },
      { type: 'transfer-search', dir: './packages/transfer-search/src' },
      { type: 'fuzzy-query', dir: './packages/fuzzy-query/src' },
      { type: 'from-utils', dir: './packages/from-utils/src' },
      // { type: 'sortable', dir: './packages/sortable/src' },
    ],
  },
  themeConfig: {
    socialLinks: {
      github: 'https://github.com/SunLxy/carefree-antd',
    },
  },
  // navs: [
  //   null,
  //   { title: 'GitHub', path: 'https://github.com/SunLxy/carefree-antd' },
  // ],
  // alias: {
  //   'carefree-antd-form': resolve(__dirname, './packages/form/src/index.ts'),
  //   'carefree-sortable': resolve(__dirname, './packages/sortable/src/index.ts'),
  //   'carefree-antd-edit-table': resolve(
  //     __dirname,
  //     './packages/edit-table/src/index.ts',
  //   ),
  //   'carefree-pro-table': resolve(
  //     __dirname,
  //     './packages/pro-table/src/index.tsx',
  //   ),
  //   'carefree-antd-transfer': resolve(
  //     __dirname,
  //     './packages/transfer/src/index.tsx',
  //   ),
  //   'carefree-antd-transfer-search': resolve(
  //     __dirname,
  //     './packages/transfer-search/src/index.tsx',
  //   ),
  //   'carefree-fuzzy-query': resolve(
  //     __dirname,
  //     './packages/fuzzy-query/src/index.ts',
  //   ),
  //   //
  // },

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
