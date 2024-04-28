import "./project-section.css";
import "../../globalStyle/global.css";
import Cards from "./Cards/Cards";

const ProjectSection = () => {
  return (
    <section className="projects">
        <h2>Projects</h2>
        <p className="projects-text">Things I’ve built so far</p>
        <Cards />
    </section>
  );
};

export default ProjectSection;
