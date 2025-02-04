import { Link } from "react-router-dom";
import "./Menu.css";

const links = [
  { id: 0, name: "Home", link: "/" },
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
  return (
    <ul className="menu">
      {links.map((item) => {
        return (
          <li className="menu-item" key={item.id} onClick={closeMenu}>
            <Link to={item.link} className="menu-link">
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
