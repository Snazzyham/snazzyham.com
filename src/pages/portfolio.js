import React from "react";
import Link from "gatsby-link";

const ItemContainer = props =>
  <div key={props.key}>
    <Link to={`/${props.url}`} class="link">
      <h1 class="dim">
        {props.title}
      </h1>
    </Link>
    <h3>
      {props.description}
    </h3>
  </div>;

const PortfolioPage = ({ data }) =>
  <div class="fl w-100">
    {data.allFolioDataJson.edges.map(x =>
      <ItemContainer
        key={x.node.id}
        title={x.node.title}
        url={x.node.link}
        description={x.node.description}
      />
    )}
  </div>;

export const folioQuery = graphql`
  query FolioQuery {
    allFolioDataJson {
      edges {
        node {
          title
          description
          id
          link
        }
      }
    }
  }
`;

export default PortfolioPage;
