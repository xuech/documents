module.exports = {
    title: 'xuech',
    description: 'xch的技术博客',
    head: [
        ['link', { rel: 'icon', href: '/img/vue.png' }]
    ],
    base: '/vuepressBlog/',
    themeConfig: {
        logo: '/img/favicon.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '开发',
                items: [
                    {
                        text: '前端', items: [
                            { text: 'JavaScript', link: '/frontEnd/js/' },
                            { text: 'CSS', link: '/frontEnd/css/' },
                            { text: 'HTML', link: '/frontEnd/html/' },
                            { text: 'Vue', link: '/frontEnd/vue/' },
                            { text: 'Webpack', link: '/frontEnd/webpack/' },
                        ]
                    },
                    {
                        text: '移动端', items: [
                            { text: 'Object-C', link: '/iOS/ios1.md/' },
                            { text: 'Swift', link: '/iOS/ios2.md/' }
                        ]
                    },
                ]
            },
            { text: 'Google', link: 'https://google.com' },

        ],
        // sidebarDepth: 2,
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                children: [
                    '/css/',
                    '/css/css01'
                ]
            },
            {
                title: 'Group 2',
                children: [
                    '/javascript/',
                    '/javascript/js01'
                ]
            }
        ],
        // 你的 Git 项目地址，添加后会在导航栏的最后追加
        repo: 'xuech/documents',
        // 启用编辑
        editLinks: true,
        // 编辑按钮的 Text
        editLinkText: '编辑文档！',
        // 编辑文档的所在目录
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
    }
}