import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = props => {
  const [theme, setTheme] = useState("isDark");

  return (
    <div className={`layout-wrapper ${theme}`}>
      {props.showNav !== false && <Navbar />}
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
