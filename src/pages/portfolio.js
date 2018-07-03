import React from "react";
import Link from "gatsby-link";
import LinkImage from "../images/link.svg";
import Folder from "../images/folder.svg";

const ItemContainer = props =>
  <div key={props.key} class="w-20-ns w-40 mv3-ns mh3-ns ml3 mb2">
    <a href={props.url} target="_blank" class="link">
      <h1 class="dim black-80 f4">
        {props.title}
      </h1>
    </a>
    <h3 class="fw3 black-70 f5">
      {props.description}
    </h3>
  </div>;

const PortfolioPage = ({ data }) =>
  <div class="fl w-100">
    <div class="fl w-100 ph5 tc mb5-ns mb3">
      <img src={Folder} alt="My Work" class="mr4-ns mr3 portfolio-icon" />
      <img src={LinkImage} alt="and links to my work" class="portfolio-icon" />
      <h3 class="mt4-ns">Some of my select work</h3>
    </div>
    <div class="flex flex-wrap fl w-100 pl4-ns mb6-ns">
      {data.allFolioDataJson.edges.map(x =>
        <ItemContainer
          key={x.node.id}
          title={x.node.title}
          url={x.node.link}
          description={x.node.description}
        />
      )}
    </div>
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
