import "./CardNavigate.css";
import pathSvg from '../../../../../../img/symbol-defs.svg'

const CardNavigate = ({linkPreview,linkCode}) => {
  console.log(linkPreview);
  
  return (
    <div className="card-links">
      <a className="card-link" href={linkPreview}>
        <svg className="icon-link">
          <use href={`${pathSvg}#icon-link`}></use>
        </svg>
        <span>Live Preview</span>
      </a>
      <a className="card-link" href={linkCode}>
        <svg className="icon-git">
          <use href={`${pathSvg}#icon-github`}></use>
        </svg>
        <span>View Code</span>
      </a>
    </div>
  );
};

export default CardNavigate;
