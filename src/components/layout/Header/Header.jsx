import "./header.css";
import "../../globalStyle/global.css";
import { useState } from "react";
import CheckedBackground from "../../Elements/CheckedBackground/CheckedBackground";
import Menu from "./Menu/Menu";
import Logo from "../../Elements/Logo/Logo";
import { motion } from "framer-motion";

const burgerMenuAnimation = {
  open:{

  },
  closed:{
    
  }
}


const Header = () => {
  let [active, setActive] = useState(false);
  const body = document.querySelector('body');

  const toggleMenu = () => {
        setActive(!active)  
        body.setAttribute("style", `overflow: ${active ? '': 'hidden'}`)
  }
  return (
    <header className="header">
        <motion.nav className="header-nav"
        animate = {active ? 'open' : 'close'} >
          <Logo />
          <button className="btn-burger" onClick={toggleMenu}>
            <motion.span
            variants={{
              close: {top: 0},
              open:{ top: 10, rotate:'45deg'}}}>
            </motion.span>
            <motion.span
               variants={{
                close: {top: 10},
                open:{top: 10,opacity: 0}}} >
           </motion.span>
            <motion.span
            variants={{
              close: {top: 20},
              open:{top: 10, rotate:'-45deg'}
            }} 
           ></motion.span>
          </button>
          <motion.div 
          className={`wrapper-menu `}
          variants={{
            close:{left:'-100%'},
            open:{left:0 }}}>
            <Menu closeMenu ={toggleMenu} active = {active}/>
            <CheckedBackground />
          </motion.div>
        </motion.nav>
    </header>
  );
};

export default Header;
