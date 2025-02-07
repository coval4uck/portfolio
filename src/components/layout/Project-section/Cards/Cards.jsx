import './Cards.css'
import imgProjectServices from '../../../../img/tech-services.png';
import imgProjectWeather from '../../../../img/weather.png';
import Card from './Card/Card';

const dataCard = [
    {
        id:0,
        name:"Tech Services",
        pathImg:`${imgProjectServices}`,
        text:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack:'Html, Scss, Js.',
        linkPreview:'https://coval4uck.github.io/TechService/',
        linkCode:'https://github.com/coval4uck/TechService/blob/master/index.html'
    },
    {
        id:1,
        name:'Weather',
        pathImg:`${imgProjectWeather}`,
        text:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack:'Html, Css, React.js, Redux-Toolkit.',
        linkPreview:'',
        linkCode:''
    }
    
]
const Cards = () => {
    return(
        <div className="cards">
            {
                dataCard.map(item => <Card {...item} key={item.id}/>)
            }
        </div>
    )
}

export default Cards