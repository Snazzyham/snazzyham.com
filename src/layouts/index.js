import { useState } from "react";
import Navbar from "../components/navbar";

const Layout = props => {
  const [theme, setTheme] = useState("isDark");

  return (
    <main className={`layout-wrapper ${theme}`}>
      {props.showNav !== false && <Navbar />}
      {props.children}
    </main>
  );
};

export default Layout;
