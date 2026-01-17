import * as path from 'node:path';
import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';

export default defineConfig({
  route: {
    cleanUrls: true,
  },
  lang: 'zh',
  base: process.env.NODE_ENV === 'production' ? '/fairys-admin-react/' : '/',
  root: path.join(__dirname, 'docs'),
  title: 'Carefree Antd',
  icon: '/logo.png',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  logo: {
    light: '/logo.png',
    dark: '/logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/SunLxy/carefree-antd',
      },
    ],
    locales: [
      {
        lang: 'zh',
        label: '中文',
        prevPageText: '上一页',
        nextPageText: '下一页',
        lastUpdated: true,
        lastUpdatedText: '最后更新',
        searchPlaceholderText: '搜索',
        searchNoResultsText: '没有结果',
        searchSuggestedQueryText: '请使用其他关键字重试',
        overview: {
          filterNameText: '过滤',
          filterPlaceholderText: '输入关键词',
          filterNoResultText: '未找到匹配内容',
        },
      },
    ],
  },
  plugins: [pluginPreview({ defaultRenderMode: 'pure' }) as any],
});
