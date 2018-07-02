import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/header";
import "./tachyons.min.css";
import "./index.scss";
import "prismjs/themes/prism-tomorrow.css";

const Layout = ({ children, data }) =>
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content:
            "Soham Adwani is a full stack web application developer based in Indonesia."
        },
        {
          name: "keywords",
          content:
            "developer, jakarta, melbourne, indonesia, javascript, Go(lang)"
        }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </div>;

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
