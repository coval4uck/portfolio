import "./Item.css";

const Item = ({ link, pathIcon }) => {
  return (
    <li className="skills-section__item">
      <a href={link} target="_blank" className="skills-section__link">
        <svg className="skills-section__icon">
          <use href={pathIcon} />
        </svg>
      </a>
    </li>
  );
};

export default Item;
