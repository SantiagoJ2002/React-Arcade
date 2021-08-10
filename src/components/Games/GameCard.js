import './Cards.scss'
import { Link } from 'react-router-dom'


export const GameCard = ({
    id,
    name,
    item,
    type,
    year,

    Date,
    characters,

}) => {
    return(
       
        <div className="Cards-Container">
             <div>
            <img src={ item } alt="{name}"/>
        </div>
        <div className="Data">
            <h5>
                { name }
            </h5>
            <p>
                {year}
            </p>

         <Link to={`./Game/${ id }`}>
            Más...
        </Link>
        </div>
        
        </div>
    )
}