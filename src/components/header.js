import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) =>
  <div class>
    <Link to="/">🏠</Link>
    <Link to="/writing/">✍</Link>
    <Link to="/portfolio/"> 💼</Link>
  </div>;

export default Header;
