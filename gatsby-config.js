module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `sheilaCat's Blog`,
    author: `sheilaCat`,
    siteUrl: `https://sheilacat.github.io`,
    description: 'This world was never meant for one as beautiful as you.',
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
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\/*\.svg/
        }
      }
    }
  ],
}
