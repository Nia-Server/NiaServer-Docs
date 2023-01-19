import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: '/1.jpg' }]],
  plugins: [
    searchPlugin({
      getExtraFields: (page) => page.frontmatter.tags ?? [],
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en-US/': {
          placeholder: 'Serch',
        }
      }
    })
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'NIA服务器文档站',
      description: 'v4.0',
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'NIA Server Docs',
      description: 'v4.0',
    }
  },
  theme: defaultTheme({
    logo: '/logo.png',
    logoDark: '/logoDark.png',
    repo: 'NIANIANKNIA/NiaServer-Docs',
    docsRepo: 'https://github.com/NIANIANKNIA/NiaServer-Docs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    locales: {
      '/en-US/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        navbar: [
          {
            text: 'Home',
            link: '/en-US/',
          },
          {
            text: 'Links',
            children: [
              {
                text: 'Blog',
                link: 'https://www.mcnia.top'
              }
            ],
          }
        ],
        sidebar: {
          '/en-US/': [
            {
              text: 'About',
              collapsible: true,
              children: ['/en-US/About.md'],
            },
            {
              text: 'Server',
              collapsible: true,
              children: ['/en-US/start.md','/en-US/guide.md'],
            },
            {
              text: 'Plugins',
              collapsible: true,
              children: ['/en-US/plugins/Ntrade.md','/en-US/plugins/KillItem.md'],
            },
          ]
        }
      },
      '/': {
        editLinkText: '在Github上编辑此页',
        lastUpdatedText: '最近更新时间',
        contributorsText: '贡献者',
        selectLanguageText: '语言',
        selectLanguageName: '简体中文',
        navbar: [
          {
            text: '首页',
            link: '/',
          },
          {
            text: '其他链接',
            children: [
              {
                text: 'Blog',
                link: 'https://www.mcnia.top'
              },
              {
                text: '如何编辑本文档站',
                link: 'https://www.mcnia.top/howtoedit'
              }
            ],
          }
        ],
        sidebar: {
          '/': [
            {
              text: '服务器相关文档',
              collapsible: true,
              children: ['/zh-CN/start.md','/zh-CN/guide.md','/zh-CN/regulation.md','/zh-CN/Illustrated.md','/zh-CN/update.md','/zh-CN/history.md','/zh-CN/map.md'],
            },
            {
              text: '如何部署服务器',
              collapsible: true,
              children: ['/zh-CN/deploy.md','/zh-CN/open-source/generate-skyisland.md'],
            },
            {
              text: '服务器插件使用说明',
              collapsible: true,
              children: ['/zh-CN/plugins/Ntrade.md','/zh-CN/plugins/KillItem.md'],
            },
            {
              text: '开发者&特别鸣谢',
              collapsible: true,
              children: ['/zh-CN/developers.md','/zh-CN/specialThanks.md'],
            },
          ]
        }
      }
    }
  })
})
