module.exports = {
  pathPrefix: "/gatsby-theme-blog-ruskin",
  siteMetadata: {
    title: `sheila.cat的博客`,
    author: `sheilaCat`,
    siteUrl: `https://sheilacat.github.io`,
    disqusName: 'sheila-cats-blog',
    googleAnalyticsUA: 'UA-66121951-1',
    description: 'SHEILA.CAT',
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    'gatsby-theme-ui-blog',
    'gatsby-theme-blog-tags',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\/*\.svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + "/blog" + edge.node.childMdxBlogPost.slug,
                  guid: site.siteMetadata.siteUrl + "/blog" + edge.node.childMdxBlogPost.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
            {
              allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                    }
                    childMdxBlogPost {
                      slug
                    }
                  }
                }
              }
            }            
            `,
            output: "/rss.xml",
            title: "SheilaCat's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/gatsby-theme-blog-ruskin/"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/", { regex: "^/" }],
        // excludePaths: ["/blog/beep-beep-lettuce"],
        height: 3,
        prependToBody: false,
        color: `#663399`
      }
    }
  ],
}
