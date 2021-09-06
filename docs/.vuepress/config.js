module.exports = {
  base: '/CatCookbook/',
  title: 'Cat Cookbook',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: true,
    repo: 'https://slankka.github.io/',
		editLinks: true,
		editLinkText: 'Help me improve this page!',
    nav: [{
      text: 'Slankka Guides',
      ariaLabel: 'Language Menu',
      items: [{
        text: 'Home Site',
        link: 'https://slankka.github.io/'
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