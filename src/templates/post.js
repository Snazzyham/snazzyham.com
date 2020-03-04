import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <div class="fl w-80-ns w-90 center ph5-ns ph3 pv2 lh-copy">
      <Helmet title={`${post.frontmatter.title} - Soham&#39;s Code Blog`} />
      <h1 class="snz-white">{post.frontmatter.title}</h1>
      <article
        dangerouslySetInnerHTML={{ __html: post.html }}
        class="lh-copy snz-white f5"
      />
      <Link to="/writing" class="link">
        <h4 class="snz-white ttu tracked link dim">&lt; Back to blog</h4>
      </Link>
    </div>
  )
}

export const query = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date_published
      }
    }
  }
`
