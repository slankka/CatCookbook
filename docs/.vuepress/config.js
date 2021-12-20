module.exports = {
  base: '/CatCookbook/',
  title: 'Cat Cookbook',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'https://github.com/slankka/CatCookbook',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我改进页面!',
    nav: [{
      text: 'Slankka Guides',
      ariaLabel: 'Slankka的指南',
      items: [{
        text: 'Home Site',
        link: 'https://github.com/slankka/CatCookbook'
      },
      {
        text: 'Dianping Cat Cookbook',
        link: 'https://slankka.github.io/CatCookbook/'
      }
      ]
    }],
    sidebar: [
      {
        title: 'Introduction',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/zh/guide/',
          '/zh/guide/recent-update'
        ]
      },
      {
        title: 'Installation',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/zh/guide/install/dependencies',
          '/zh/guide/install/installation',
          '/zh/guide/install/docker',
          '/zh/guide/install/storage',
          '/zh/guide/install/troubleshooting',
        ]
      },
      {
        title: 'Development',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/zh/guide/development-ide'
        ]
      },
      {
        title: 'Configuration',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        path: '/zh/guide/Configuration',
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/zh/guide/config/project',
          '/zh/guide/config/alarm',
          '/zh/guide/config/global',
          '/zh/guide/config/router',
          '/zh/guide/config/business',
          '/zh/guide/config/heartbeat'
        ]
      },
      {
        title: 'Advanced',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/zh/guide/tutorial/',
          '/zh/guide/tutorial/article-01',
          '/zh/guide/tutorial/article-02',
        ]
      },
      {
        title: 'Client',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/zh/guide/client/java',
          '/zh/guide/client/python',
          {
            title: 'Cat Client for C',
            collapsable: true,
            path: '/zh/guide/client/c',
            sidebarDepth: 1,
            children: [
              '/zh/guide/client/api/c-api'
            ],
          },
          {
            title: 'Cat Client for C++',
            collapsable: true,
            path: '/zh/guide/client/c++',
            sidebarDepth: 1,
            children: [
              '/zh/guide/client/api/c++-api'
            ],
          },
          '/zh/guide/client/go',
          '/zh/guide/client/node.js',
          ['https://github.com/ctripcorp/cat.net', 'Cat Client for .Net']
        ]
      }
    ]
  }
}
