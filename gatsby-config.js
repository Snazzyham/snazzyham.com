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
    "gatsby-transformer-remark"
  ]
};
