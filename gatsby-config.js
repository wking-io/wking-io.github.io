require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "wking",
    titleTemplate: "%s | wking",
    description:
      "Sharing projects and content on functional programming and frontend development.",
    url: "https://wking.io",
    image: "/images/snape.jpg",
    twitterUsername: "@wking__",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wking`,
        short_name: `wking`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/wking-logo-square.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Slab`,
            subsets: [`latin`],
            variants: [`700`],
            formats: [`woff`, `woff2`],
          },
          {
            family: `Fira Sans`,
            subsets: [`latin`],
            variants: [`400`, `400i`, `500`, `500i`, `700`, `700i`],
            formats: [`woff`, `woff2`],
          },
        ],
      },
    },
  ],
}
