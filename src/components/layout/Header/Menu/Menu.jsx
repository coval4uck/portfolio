import { Link } from "react-router-dom";
import "./Menu.css";
import { useState } from "react";
import {motion, AnimateSharedLayout} from "framer-motion";

const links = [
  { id: 0, name: "Home", link: "/portfolio" },
  { id: 1, name: "About", link: "/about" },
  { id: 2, name: "Tech Stack", link: "/stack" },
  { id: 3, name: "Projects", link: "/projects" },
  { id: 4, name: "Contact", link: "/contacts" },
];

const Menu = (props) => {
  const closeMenu = () => {
    if (props.active) {
      props.closeMenu();
    }
  };
  const [activeLink,setActiveLink] = useState(0)
  return (
    <ul className="menu">
     {links.map((item) => {
        return (
          <li className="menu-item" key={item.id} 
          
          onClick={() => {
            closeMenu()
            setActiveLink(item.id)
          }}
          >
            <Link to={item.link}  className="menu-link"
            >
              {item.name}
            </Link>
            {activeLink === item.id && <ActiveLine />}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;

const ActiveLine = () => {
  return(
    <motion.div
    layoutId
    style = {{
      width: '100%',
      height: 4,
      borderRadius: 5,
      position: 'absolute',
      background:'red',
      bottom: "-8px"
    }}>

    </motion.div>
  )
}