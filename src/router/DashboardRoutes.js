import { Header } from "../components/Header/Header"
import { Homepage } from "../components/homepage/Homepage"
import { Indies } from "../components/Indies/IndiesScreen"
import {Switch, Route, Redirect} from 'react-router-dom'
import { TripleA } from "../components/TripleA/TripleA"
import { GameScreen } from "../components/Games/GameScreen"
import { Footer } from "../components/Footer/Footer"
import {AboutUs} from "../components/Aboutus/AboutUs"



export const DashboardRoutes = () => {
    return(
        <>

            <Header/>

            <div>
                <Switch>
                    <Route exact path="/Homepage" component={Homepage}/>
                    <Route exact path="/Indie" component={ Indies }/>
                    <Route path="/Game/:GameId" component={ GameScreen } />
                    <Route exact path="/TripleA" component={ TripleA}/>
                    <Route exact path="/AboutUs" component= { AboutUs }/>

                    <Redirect to='/Homepage'/>
                </Switch>

                <Footer/>
            </div>
        </>
    )
}