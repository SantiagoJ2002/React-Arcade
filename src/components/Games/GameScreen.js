import { Redirect, useParams } from "react-router";
import { getGamesById } from "../../utils/getGamesById";
import './GameScren.scss'


export const GameScreen = () => {
    const  {GameId} = useParams();

    const VGame = getGamesById(GameId);

    if (!VGame) {
        return <Redirect to="/"/>;    }

    const {
        name,
        item,
        shot,
        dev,
        year,
        desc,
        type,
        Date,
        characters,
    } = VGame;


    return(
        <div className="Game-Container">
            
                <style>
                    
                </style>
                
                <img src={shot}/>
            <div className="Main-Card">
                <h3>
                   {name}
                   <span>  <p>
                    {year}
                </p></span>
                </h3> 
                <p>
                    {dev}
                </p>
              
                <p>
                    {desc}
                </p>
            </div>

            <div className="Banner-Container">
                <img src={item}/>
            </div>
            

           

        </div>
    )
}