import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function Home() {
  return (
    <section className="home">
      <div className="hero container">

        {/* Left / Main content */}
        <div className="hero-content">
          <span className="badge">MERN STACK DEVELOPER</span>

          <h1>
            Hi, I’m <span>Rushabh Thaware</span>
          </h1>

          <p className="subtitle">
            I build scalable, high-performance web applications using
            modern JavaScript technologies.
          </p>

          <div className="cta-group">
            <a href="/projects" className="btn primary">View Projects</a>
            <a href="/contact" className="btn ghost">Contact Me</a>
          </div>
        </div>

        {/* Right / Visual tech stack */}
        <div className="hero-tech">
          <SiMongodb title="MongoDB" />
          <SiExpress title="Express.js" />
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
        </div>

      </div>
    </section>
  );
}
