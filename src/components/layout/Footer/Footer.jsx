import "./footer.css";
import Logo from "../../Elements/Logo/Logo";
import Messengers from "../../Elements/Messengers/Messengers";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Logo />
        <ul className="footer__contacts">
          <li className="footer__contacts-phone">
            <a className="footer__link" href="tel:+380681259447">
              +380681259447
            </a>
            <a className="footer__link" href="tel:+760734855824">
              +760734855824
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="mailto:coval4uck.valentun@gmail.com"
            >
              coval4uck.valentun@gmail.com
            </a>
          </li>
        </ul>
      </nav>
      <Messengers />
    </footer>
  );
};
export default Footer;
