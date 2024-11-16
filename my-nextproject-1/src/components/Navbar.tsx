import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar fade-in">
      <h1 className="logo bounce">Syeda Ureefa Ali</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
