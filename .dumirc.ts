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
});
