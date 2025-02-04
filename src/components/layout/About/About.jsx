import "./About.css";
import "../../globalStyle/global.css";
import pathIcon from "../../../img/symbol-defs.svg";
import { delay, motion } from "framer-motion";

const itemAnimation = {
  hidden: {
    opacity:0,
    y: 200,
  },
  visible:{
    opacity:1,
    y:0,
  }
}
const titleAnimation = {
  hidden:custom => ({
    opacity:0,
    x: custom,
  }),
  visible:{
    opacity:1,
    x:0,
  },

}
const textAnimation = {
  hidden:{
    height:0,
    width:0
  },
  visible:{
     height: 'auto',
     width:'auto'
  }
}

const About = () => {
  return (
    <div className="about">
      <div className="wrapper-info">
        <motion.h2 
          initial = 'hidden' animate = 'visible' custom={-200}
          transition={{duration:0.5}} variants={titleAnimation}>
            About Me
        </motion.h2>
        <motion.p className="description"
          initial = 'hidden' animate = 'visible'
          transition={{duration: 0.7, delay:0.5}}
          variants={textAnimation} style={{overflow:'hidden'}}>
          Hello. My name is Valentyn and I am 21 years old. I am ambitious,
          active and strive for continuous development. I got acquainted with
          web development back in 2020 in college. I have been studying
          front-end development for about 1 year now. And I really like what I
          do. My stack is html, css, scss, React.js, Redux-toolkit.
        </motion.p>
        <motion.h2
          initial = 'hidden' animate = 'visible' custom={200}
          transition={{duration:0.5,delay:1.2}} variants={titleAnimation}>
          Work Experience
        </motion.h2>
        <ul className="experience-items">
          <motion.li className="experience-item" initial = 'hidden' animate = 'visible'
            transition={{duration:0.5, delay:1.7 }}
            variants={itemAnimation}
          >
            <div>
              <h3 className="experience-name">Junior Web Developer</h3>
              <p className="experience-time">Full Time</p>
            </div>
            <div>
              <p className="info-company-error">No information...</p>
              {/* <div className="info-company">
                        <p ></p>
                        <p></p>
                    </div>
                    <p></p> */}
            </div>
          </motion.li>
        </ul>
        <motion.h2
          initial = 'hidden' animate = 'visible' custom={-200}
          transition={{duration:0.5,delay:2.2}} variants={titleAnimation}
        >Education</motion.h2>
        <motion.ul className="experience-items" >
          <motion.li className="experience-item" initial = 'hidden' animate ='visible'
            transition={{duration:0.5, delay:2.7 }} variants={itemAnimation}
          >
            <div>
              <h3 className="experience-name">Junior Technician Programmer</h3>
              <p className="experience-time">Full Time</p>
            </div>
            <div>
              <div className="info-company">
                <a href="https://hpk.edu.ua/" target="_blank">
                  <svg className="company-icon">
                    <use href={`${pathIcon}#icon-company`} />
                  </svg>
                  <span>Khmelnytskyi Polytechnic Vocational College</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/v88d2NBepWPtXD4a6"
                  target="_blank"
                >
                  <svg className="location-icon">
                    <use href={`${pathIcon}#icon-location`} />
                  </svg>
                  <span>Khmelnytskyi</span>
                </a>
              </div>
              <p>Sep 2018 - Jun 2022</p>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default About;
