module.exports = {
  siteMetadata: {
    title: "david's musings",
  },
  pathPrefix: `/vanilla-gatsby-app`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
