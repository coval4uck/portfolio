import "./header.css";
import "../../globalStyle/global.css";
import { useState } from "react";
import CheckedBackground from "../../Elements/CheckedBackground/CheckedBackground";
import Menu from "./Menu/Menu";
import Logo from "../../Elements/Logo/Logo";

const Header = () => {
  let [active, setActive] = useState(false);
  const onChange = () => {
        setActive(!active)
        const body = document.querySelector('body');
        body.classList.toggle('lock')
  }
  return (
    <header className="header">
        <nav className="header-nav">
          <Logo />
          <button
            className={`btn-burger ${active ? "open" : ""}`}
            onClick={onChange}
          >
            <span></span>
          </button>
          <div className={`wrapper-menu ${active ? "menu-active" : ""}`}>
            <Menu />
            <CheckedBackground />
          </div>
        </nav>
    </header>
  );
};

export default Header;
