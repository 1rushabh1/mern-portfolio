export default function About() {
  return (
    <section className="about">
      <div className="container about-wrapper">

        {/* Header */}
        <div className="about-header">
          <span className="badge">ABOUT ME</span>
          <h2>Building Products with Purpose & Precision</h2>
          <p>
            I’m Rushabh Thaware — a MERN Full-Stack Developer focused on
            crafting fast, scalable, and user-centric web applications.
          </p>
        </div>

        {/* Story */}
        <div className="about-card">
          <h3>My Journey</h3>
          <p>
            I specialize in the MERN stack — MongoDB, Express.js, React.js,
            and Node.js — and enjoy working across the entire development
            lifecycle, from UI design to backend architecture.
          </p>

          <p>
            This portfolio itself is a product of hands-on learning, where
            I implemented real-world architecture, secure APIs, responsive
            interfaces, and scalable database design.
          </p>
        </div>

        {/* Discipline */}
        <div className="about-card highlight">
          <h3>Discipline Beyond Code</h3>
          <p>
            Before stepping fully into software development, I built
            discipline and resilience through physical training — gym,
            swimming, and boxing practice.
          </p>

          <p>
            These experiences shaped my ability to stay focused, handle
            pressure, and maintain consistency — qualities I bring directly
            into my engineering work.
          </p>
        </div>

        {/* Strengths */}
        <div className="about-grid">
          <div className="about-tile">
            <h4>Engineering Mindset</h4>
            <p>Clean architecture, scalable systems, long-term thinking.</p>
          </div>

          <div className="about-tile">
            <h4>Problem Solving</h4>
            <p>Break complex problems into structured, solvable parts.</p>
          </div>

          <div className="about-tile">
            <h4>Product Thinking</h4>
            <p>User experience, performance, and maintainability matter.</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="about-stack">
          <h3>Tech Stack & Strengths</h3>

          <p>
            <strong>Tech:</strong> MERN Stack • JavaScript • REST APIs • React
            Hooks • Context API • Redux • Tailwind CSS • MongoDB • Mongoose •
            Git/GitHub • Deployment • API Integration
          </p>

          <p>
            <strong>Soft Strengths:</strong> High Focus • Quick Learner •
            Handles Pressure Well • Consistency • Team Collaboration •
            Ownership Mindset
          </p>
        </div>

      </div>
    </section>
  );
}
