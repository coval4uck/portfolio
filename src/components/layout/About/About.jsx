import "./About.css";
import "../../globalStyle/global.css";
import pathIcon from "../../../img/symbol-defs.svg";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper-info">
        <h2>About Me</h2>
        <p className="description">
          Hello. My name is Valentyn and I am 21 years old. I am ambitious,
          active and strive for continuous development. I got acquainted with
          web development back in 2020 in college. I have been studying
          front-end development for about 1 year now. And I really like what I
          do. My stack is html, css, scss, React.js, Redux-toolkit.
        </p>
        <h2>Work Experience</h2>
        <ul className="experience-items">
          <li className="experience-item">
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
          </li>
        </ul>
        <h2>Education</h2>
        <ul className="experience-items">
          <li className="experience-item">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
