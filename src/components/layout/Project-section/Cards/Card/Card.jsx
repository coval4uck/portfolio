import './Card.css'
import CardNavigate from './CardNavigate/CardNavigate'

const Card = ({id,name,pathImg,text,stack,linkPreview,linkCode}) => {
    return(
        <article className="card">
            <img
              className="card-img"
              src={pathImg}
              alt="Photo"
            />
            <div className="card-content">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">{text}</p>
              <p className="card-info">
                <b>Tech stac: </b> {stack}
              </p>
              <CardNavigate  {...linkPreview} {...linkCode}/>
              
            </div>
        </article>
    )
}

export default Card