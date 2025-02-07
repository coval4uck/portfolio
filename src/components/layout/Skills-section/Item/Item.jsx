import "./Item.css";
import {motion} from 'framer-motion'

const itemAnimation = {
  hidden:{
    y:"-100%",
    opacity: 0,
  },
  visible:{
    y:0,
    opacity:1,
  }
}
const Item = ({ id,name,link,pathIcon }) => {
  return (
    <motion.li className="skills-section__item"
    transition = {{delay:1,duration:(id+1)/3}}
    variants={itemAnimation}>
      <a href={link} target="_blank" className="skills-section__link" >
        <svg className="skills-section__icon">
          <use href={pathIcon} />
        </svg>
      </a>
    </motion.li>
  );
}
export default Item

