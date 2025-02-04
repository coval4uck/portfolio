import "./skills-section.css";
import {motion} from 'framer-motion'
import Item from "./Item/Item";
import icons from "../../../img/symbol-defs.svg";


const dataSkills = [
  {
    id: 0,
    link: "https://w3schoolsua.github.io/html/index.html#gsc.tab=0",
    pathIcon: `${icons}#icon-html`,
  },
  {
    id: 1,
    link: "https://w3schoolsua.github.io/css/index.html#gsc.tab=0",
    pathIcon: `${icons}#icon-css`,
  },
  {
    id: 2,
    link: "https://w3schoolsua.github.io/js/index.html#gsc.tab=0",
    pathIcon: `${icons}#icon-js`,
  },
  {
    id: 3,
    link: "https://w3schoolsua.github.io/react/index.html#gsc.tab=0",
    pathIcon: `${icons}#icon-react`,
  },
  {
    id: 4,
    link: "https://uk.wikipedia.org/wiki/Redux#:~:text=Redux%20%E2%80%94%20%D1%86%D0%B5%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%20%D1%81%D1%82%D0%B0%D0%BD%D1%96%D0%B2%20%D0%B4%D0%BB%D1%8F%20%D0%B7%D0%B0%D1%81%D1%82%D0%BE%D1%81%D1%83%D0%BD%D0%BA%D1%96%D0%B2%20JavaScript.,%D0%BF%D0%BE%D1%94%D0%B4%D0%BD%D0%B0%D0%BD%D0%BD%D1%96%20%D0%B7%20%D0%B2%D1%96%D0%B4%D0%BB%D0%B0%D0%B4%D1%87%D0%B8%D0%BA%D0%BE%D0%BC%2C%20%D1%89%D0%BE%20%D0%BF%D1%80%D0%B0%D1%86%D1%8E%D1%94%20%D0%BF%D1%96%D0%B4%20%D1%87%D0%B0%D1%81%20%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B8.",
    pathIcon: `${icons}#icon-redux`,
  },
  {
    id: 5,
    link: "https://w3schoolsua.github.io/githubpages/index.html#gsc.tab=0",
    pathIcon: `${icons}#icon-github`,
  },
];
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
const SkillsSection = () => {
  return (
    <motion.section className="skills-section"
      initial = 'hidden'
      whileInView = 'visible'
      viewport = {{amount:0.4}}
    >
      <motion.h2 className="skills-section__title"
        transition = {{duration:1}}
        variants={titleAnimation}
      >My Tech Stack</motion.h2>
      <motion.p className="skills-section__text"
      
      transition = {{duration:1}}
      variants={subTitleAnimation}
      >
        Technologies I’ve been working with recently
      </motion.p>
      <ul className="skills-section__lists"
      >
        {dataSkills.map((item) => (
          <Item 
          link={item.link} pathIcon={item.pathIcon} id={item.id} key={item.id} />
          
        ))}
      </ul>
    </motion.section>
  );
};

export default SkillsSection;
