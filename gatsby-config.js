module.exports = {
  siteMetadata: {
    title: "Soham Adwani - Web App Developer based in Indonesia"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-preact",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              aliases: { js: "javascript" }
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        plugins: [
          {
            resolve: "gatsby-source-filesystem",
            options: {
              path: `${__dirname}/src/folio_data`,
              name: "folio_data"
            }
          }
        ]
      }
    }
  ]
};
