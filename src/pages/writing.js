import React from "react";
import Link from "gatsby-link";
import Terminal from "../images/terminal.svg";
import Pencil from "../images/pencil.svg";
import dayjs from "dayjs";

const PostContainer = props =>
  <div key={props.key} class="w-60-ns center ph2 pv3">
    <Link to={`/${props.path}`} class="link black-80">
      <h1 class="dim mb1">
        {props.title}
      </h1>
    </Link>
    <h3 class="mt0 black-60 f5 fw3">
      {dayjs(props.date).format("MMMM YYYY")}
    </h3>
    <p class="black-70" dangerouslySetInnerHTML={{ __html: props.excerpt }} />
  </div>;

const WritingPage = ({ data }) =>
  <div class="fl w-100">
    <div class="fl w-100 ph5 tc mb5-ns mb3">
      <img src={Terminal} alt="Code" class="mr4-ns mr3 code-icon" />
      <img src={Pencil} alt="blog" class="blog-icon" />
    </div>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date_published], order: DESC }
    ) {
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
