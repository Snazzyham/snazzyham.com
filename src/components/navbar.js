import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = props => {
  return (
    <motion.div
      className="navbar"
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      drag="x"
      dragConstraints={{ left: 0, right: 200 }}
      dragElastic={0}
      onDragEnd={(event, info) => {
        if (info.point.x > 20 && window.innerWidth < 600) {
          props.toggleNav();
        }
      }}
    >
      {props.showClose && (
        <button className="close-btn" onClick={() => props.toggleNav()}>
          &Chi;
        </button>
      )}
      <ul>
        <motion.li
          whileHover={{ scale: 1.2, x: -50 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, x: -50 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/writing">
            <a>Blog</a>
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, x: -50 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
