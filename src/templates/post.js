import React from "react";
import Helmet from "react-helmet";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  console.log(data);
  return (
    <div>
      <Helmet title={`${post.frontmatter.title} - Soham&#39;s Code Blog`} />
      <h1>
        {post.frontmatter.title}
      </h1>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
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
`;
