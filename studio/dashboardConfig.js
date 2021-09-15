export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614209316f9e17613496965f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dh1giphe',
                  apiId: '16b57a9e-cb20-48e2-9daf-579e4f6fa570'
                },
                {
                  buildHookId: '61420931ce501e623aa5abf0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fyomfooo',
                  apiId: 'a48104ab-a9a4-4020-9abd-3368e3174db8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KaiyaoZhang/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fyomfooo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
