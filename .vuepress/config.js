module.exports = {
  title: 'ProTable',
  description: 'A DataTable alternative. Written with modern javascript.',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': process.env.GA_ID || ''
      }
    ]
  ],
  themeConfig: {
    searchPlaceholder: 'Search..',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples/' }
    ],
    sidebar: {
      '/guide/': [
        '',
        'getting-started',
        'custom-content',
        'pagination',
        'sort',
        'filter',
        'styling'
      ]
    },
    repo: 'ibnujakaria/protable',
    repoLabel: 'Github',
    docsRepo: 'ibnujakaria/protable-docs',
    editLinks: true,
    editLinkText: 'Improve this page'
  }
}