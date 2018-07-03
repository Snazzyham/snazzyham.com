import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) =>
  <div class="fl w-100 pv3-ns lh-copy flex justify-end">
    <div class="f2 nav w-third-ns">
      <Link class="dim" to="/">
        🏠
      </Link>
      <Link class="dim" to="/writing/">
        ✍
      </Link>
      <Link class="dim" to="/portfolio/">
        💼
      </Link>
    </div>
  </div>;

export default Header;
