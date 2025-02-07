import "./project-section.css";
import "../../globalStyle/global.css";
import Cards from "./Cards/Cards";
import { motion } from "framer-motion";
const titleAnimation = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
  }
}
const subTitleAnimation = {
  hidden:{
    opacity: 0,
    x:-1000,
  },
  visible:{
    opacity:1,
    x:0
  }
}
const ProjectSection = () => {
  return (
    <motion.section className="projects"
      initial = 'hidden'
      whileInView = 'visible'
      viewport={{amount:0.2}}
    >
        <motion.h2
          transition = {{duration:1}}
          variants={titleAnimation}
        >Projects</motion.h2>
        <motion.p className="projects-text"
          transition = {{duration:0.8}}
          variants={subTitleAnimation}
        >Things I’ve built so far</motion.p>
        <Cards />
    </motion.section>
  );
};

export default ProjectSection;
