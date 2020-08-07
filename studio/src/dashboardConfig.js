export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f2caace94c5f768af131d83',
                  title: 'Sanity Studio',
                  name: 'terrygyde-com-studio',
                  apiId: 'd9b4ba6b-681e-491e-80a2-9244620f50e4'
                },
                {
                  buildHookId: '5f2caace953e729a43ce5aed',
                  title: 'Blog Website',
                  name: 'terrygyde-com',
                  apiId: '556170bc-ef0b-4c6d-ba1f-8c14d4129df5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/terry-gyde/terrygyde.com',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://terrygyde-com.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
