import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const variants = {
  hide: { opacity: 0, z: -5000, scale: 0.1 },
  show: {
    opacity: 1,
    z: 0,
    scale: 1,
    transition: { easing: "ease", duration: 0.5 }
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
