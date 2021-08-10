import { Games } from "../data/Games";

export const getGamesById = ( id ) => {



    return Games.find( Game => Game.id === id)

}