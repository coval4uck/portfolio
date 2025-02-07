import "./CheckedBackground.css";
import icons from "../../../img/symbol-defs.svg";
import { useTheme } from "../../../hooks/useTheme";

const CheckedBackground = () => {
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === "light" ? "dark" : "light");
  };
  return (
    <label className="toggle-theme">
      <input
        type="checkbox"
        onClick={changeTheme}
        className="toggle-theme__input"
        checked={theme.theme === "light" ? false : true}
      />
      <span className="toggle-theme__slider">
        <svg className="icon-moon">
          <use href={`${icons}#icon-moon`}></use>
        </svg>
        <svg className="icon-sun">
          <use href={`${icons}#icon-sun`}></use>
        </svg>
      </span>
    </label>
  );
};

export default CheckedBackground;
