import { Games } from "../data/Games";

export const getGamesByType = ( type ) => {

    const validtypes = ['Indie', 'Triple A'];
    if ( !validtypes.includes ( type ) ) {
        //throw new Error(`categoria "${ type }" no es correcto` );
    }

    return Games.filter( Game => Game.type === type)

}