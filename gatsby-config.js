const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : process.env.REVIEW_ID
    ? `https://deploy-preview-${process.env.REVIEW_ID}--cozinhadosbonitos.netlify.app`
    : `https://cozinhadosbonitos.com`

module.exports = {
  siteMetadata: {
    title: `Cozinha dos Bonitos`,
    description: `Cooking website Cozinha dos Bonitos`,
    siteUrl: baseUrl,
    author: `@browniebroke`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cozinha dos Bonitos`,
        short_name: `Cozinha`,
        start_url: `/`,
        background_color: `lavender`,
        theme_color: `lavender`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
        isBaseProvider: false,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `nufe3788`,
        dataset: `production`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
