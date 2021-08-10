import { useMemo } from "react";
import { getGamesById } from "../../utils/getGamesById"
import { getGamesByType } from "../../utils/getGamesByType"
import { GameCard } from "./GameCard";


export const GameList = ({type}) => {
    const Games = useMemo(()=> getGamesByType(type), [type] );

    return(
        <div>
            {
                Games.map( Game =>(
                    <GameCard
                        key={Game.id}
                        {...Game}/>
                ))
            }
        </div>
    )
}