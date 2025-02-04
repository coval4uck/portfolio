import "./hero-section.css";
import "../../globalStyle/global.css";
import {motion} from 'framer-motion'
import pathMyFoto from "../../../img/my-photo.jpg";


const textAnimation = {
  hidden: {
    opacity: 0,
    x:-1000
  },
  visible: {
    opacity: 1,
     x:0
  }
}
const photoAnimation = {
  hidden: {
    opacity:0,
    y:-1000,
  },
  visible: {
    opacity:1,
    y:0,
  }
}

const HeroSection = () => {
  return (
    <motion.section className="hero-section"
    initial = 'hidden'
    whileInView= 'visible'
    >
      <motion.h1 className="hero-title"
        transition = {{duration: 1.2,delay:0.5}}
        variants={textAnimation}
      >
        Hi, <br />
        My name is
        <motion.span className="accent"
        transition = {{duration: 1.2,delay:0.5}}
        variants={textAnimation}
        >Valentyn K </motion.span>I Frontend-developer
      </motion.h1>
      <motion.img className="hero-my-photo" src={pathMyFoto} alt="my-photo" 
        transition = {{duration:1}}
        variants={photoAnimation}
      />
    </motion.section>
  );
};

export default HeroSection;
