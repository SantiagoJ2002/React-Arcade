import { GameList } from "../Games/Games";
import './TripleA.scss'
import NewVegas from "../../assets/NewVegas.jpg"

export const TripleA = () => {
    return(
        <div className="Games-Container">
            <div className="TripleA">
                 <img src={NewVegas}/>
                 <h2>
                     JUEGOS TRIPLE A
                     </h2>   
            </div>
            <div>
               
            </div>
        
            <div className="pic-container">

                 <span><p>Los mas Popuplares</p></span>
            <GameList type='Triple A'/>
            </div>
        </div>
    )
}