import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="container">
        
        <Link to="/" className="brand">
          Rushabh Thaware
        </Link>

        <div className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <a
            href="https://www.linkedin.com/in/rushabh-thaware-8a1508216/"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

      </div>
    </nav>
  );
}
