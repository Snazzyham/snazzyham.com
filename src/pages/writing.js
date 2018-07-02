import React from "react";
import Link from "gatsby-link";

const PostContainer = props =>
  <div key={props.key}>
    <Link to={`/${props.path}`} class="link">
      <h1 class="dim">
        {props.title}
      </h1>
    </Link>
    <h3>
      {props.date}
    </h3>
    <p dangerouslySetInnerHTML={{ __html: props.excerpt }} />
  </div>;

const WritingPage = ({ data }) =>
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    {data.allMarkdownRemark.edges.map(x =>
      <PostContainer
        key={x.node.id}
        title={x.node.frontmatter.title}
        date={x.node.frontmatter.date_published}
        path={x.node.frontmatter.slug}
        excerpt={x.node.excerpt}
      />
    )}
  </div>;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            date_published
          }
        }
      }
    }
  }
`;

export default WritingPage;
