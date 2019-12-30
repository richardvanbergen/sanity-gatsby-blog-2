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
                  buildHookId: '5e0a0e2d6afb0e833a162ee9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-6dv9369y',
                  apiId: '828cc134-fd77-4b85-9243-699c962a356d'
                },
                {
                  buildHookId: '5e0a0e2d6470297e6bf643fb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-c3wknrqd',
                  apiId: 'bd8965d7-1f78-4ae8-ad89-f6e249c46c15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richardvanbergen/sanity-gatsby-blog-2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-c3wknrqd.netlify.com', category: 'apps' }
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
