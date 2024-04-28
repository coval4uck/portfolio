import "./Messengers.css";
import pathSvg from "../../../img/symbol-defs.svg";

const messengersList = [
  {
    id: 0,
    pathIcon: `${pathSvg}#icon-github`,
    link: "https://github.com/coval4uck?tab=projects",
  },
  {
    id: 1,
    pathIcon: `${pathSvg}#icon-twitter`,
    link: "",
  },
  {
    id: 2,
    pathIcon: `${pathSvg}#icon-linkedin`,
    link: "",
  },
];

const Messengers = () => {
  return (
    <ul className="messengers">
      {messengersList.map((item) => {
        return (
          <li key={item.id} className="messengers__item">
            <a href={item.link} target="_blank">
              <svg className="messengers__icon">
                <use href={item.pathIcon} />
              </svg>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Messengers;
