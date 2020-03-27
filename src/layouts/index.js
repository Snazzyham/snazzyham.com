import { useState } from "react";

const Layout = props => {
  const [theme, setTheme] = useState("isDark");

  return <main className={`layout-wrapper ${theme}`}>{props.children}</main>;
};

export default Layout;
