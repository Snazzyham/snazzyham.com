import React from "react";
import Helmet from "react-helmet";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  console.log(data);
  return (
    <div>
      <h1>
        {post.frontmatter.title}
      </h1>
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
