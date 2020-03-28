const Footer = props => {
  return (
    <footer className="footer">
      <p>Copyright Soham Adwani, {new Date().getYear() + 1900}.</p>
      <p>
        This site is built with Next.js, code can be found{" "}
        <a href="https://github.com/snazzyham/snazzyham.com">here.</a>
      </p>
    </footer>
  );
};

export default Footer;
