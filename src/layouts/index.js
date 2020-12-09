import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion, useCycle } from "framer-motion";
import Head from "next/head";

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
      {props.isPost !== true && (
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://snazzyham.com/" />
          <meta
            property="og:title"
            content="Soham Adwani - Web App Developer based in Indonesia"
          />
          <meta
            property="og:description"
            content="Soham Adwani is a full stack web application developer based in Indonesia."
          />
          <meta
            property="og:image"
            content="https://images.prismic.io/snazzyham/265fecdf-3ff9-48c5-82e0-77f889c029e6_IMG_0053.JPG?auto=compress,format"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://snazzyham.com/" />
          <meta
            property="twitter:title"
            content="Soham Adwani - Web App Developer based in Indonesia"
          />
          <meta
            property="twitter:description"
            content="Soham Adwani is a full stack web application developer based in Indonesia."
          />
          <meta
            property="twitter:image"
            content="https://images.prismic.io/snazzyham/265fecdf-3ff9-48c5-82e0-77f889c029e6_IMG_0053.JPG?auto=compress,format"
          />
        </Head>
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
