import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../styles/Projects.css";

const Projects = () => {
  return (
    <>
      <Navbar />
      <main className="projects-container">
        <h2>My Projects</h2>
        <ul>
          <li>Next.js Application</li>
          <li>TypeScript ToDo App</li>
          <li>Cli Calculator</li>
          <li>Number Guessing Game</li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
