import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-brand">
          <h3>Rushabh Thaware</h3>
          <p>MERN Stack Developer · Full-Stack JavaScript Engineer</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/rushabh-thaware-8a1508216/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a href="mailto:your.email@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Rushabh Thaware · Built with MERN
        </div>

      </div>
    </footer>
  );
}
