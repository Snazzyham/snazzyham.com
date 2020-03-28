import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 }
};

const Layout = props => {
  const [theme, setTheme] = useState("isDark");

  return (
    <motion.div
      className={`layout-wrapper ${theme}`}
      initial={"hide"}
      animate={"show"}
      exit={"hide"}
      variants={variants}
    >
      {props.showNav !== false && <Navbar />}
      <main className="main">{props.children}</main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
