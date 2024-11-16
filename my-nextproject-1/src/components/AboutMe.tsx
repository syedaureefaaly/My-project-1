import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me-container fade-in">
      <h2>About Me</h2>
      <p>
        Hi, I am Syeda Ureefa Ali, a passionate developer with skills in modern web technologies.
      </p>
      <h3>My Skills</h3>
      <div className="skills-container">
        <span className="skill">TypeScript</span>
        <span className="skill">JavaScript</span>
        <span className="skill">HTML</span>
        <span className="skill">CSS</span>
        <span className="skill">Next.js</span>
      </div>
    </section>
  );
};

export default AboutMe;
