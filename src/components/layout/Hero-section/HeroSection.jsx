import "./hero-section.css";
import "../../globalStyle/global.css";
import pathMyFoto from "../../../img/my-photo.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Hi, <br />
        My name is
        <span className="accent">Valentyn K </span>I Frontend-developer
      </h1>
      <img className="hero-my-photo" src={pathMyFoto} alt="my-photo" />
    </section>
  );
};

export default HeroSection;
