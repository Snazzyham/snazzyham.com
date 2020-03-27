import Link from "next/link";

const Navbar = props => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/writing">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
