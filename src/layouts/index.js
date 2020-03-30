import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const variants = {
  hide: { scale: 0.1 },
  show: {
    scale: 1
  }
};

const Layout = props => {
  const [theme, setTheme] = useState("isDark");

  return (
    <>
      {props.showNav !== false && <Navbar />}
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
