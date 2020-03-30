import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion, useCycle } from "framer-motion";

const variants = {
  hide: { scale: 0.1 },
  show: {
    scale: 1
  }
};

const Layout = props => {
  const [theme, setTheme] = useState("isDark");
  const [showNav, toggleNav] = useCycle(true, false);
  const [showMenuButton, setMenuButton] = useState(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 600) {
        toggleNav();
        setMenuButton(true);
      }
    }
  }, []);

  return (
    <>
      {props.showNav !== false && showNav !== false && (
        <Navbar toggleNav={toggleNav} showClose={showMenuButton} />
      )}
      {showMenuButton === true && props.showNav !== false && (
        <button className="menu-btn" onClick={() => toggleNav()}>
          &equiv;
        </button>
      )}
      <motion.div
        className={`layout-wrapper ${theme}`}
        initial={"hide"}
        animate={"show"}
        exit={"hide"}
        variants={variants}
      >
        <main className="main">{props.children}</main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Layout;
