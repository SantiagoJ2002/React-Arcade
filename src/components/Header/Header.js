import"./Header.scss"
import logo from '../../assets/logo.png';
import carrito from '../../assets/carrito.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import './_reboot.scss'
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import {types} from '../../types/Types'
import { useHistory } from "react-router";
import search from '../../assets/magnifying-glass.png'
import { Games } from "../../data/Games";





export const Header = (  ) => {
    const { user:{ name }, dispatch } = useContext(AuthContext);
    const history = useHistory();
    const gamesFiltered = Games

    const [show, setShow] = useState(false);

    window.onscroll = () => {
        setShow(window.pageXOffset === 1 ? false : true);
        return () => window.onscroll = null;

    }



    console.log(show);
    const handleLogout = () => {

        history.replace('/login');
    
        dispatch({
            type: types.logout
        });
    }
    
    
    return(
  
        <header className={show ? "Header-Container dark" : "Header-Container"}> 
        <div className="logo-container">
         <img src={logo}></img>
        <h1><Link to="/Homepage">REACT ARCADE</Link></h1>
        </div>
        <div className="shopping-car">

            <div className="input-container">
              
            <input type="text" name="search" placeholder=" Search.."/>
            
            <button
                type="submit">
                <img src={search}/>
            </button>

            </div>


         <img src ={carrito}/>   

        <div className="log-in">
         <span><a>{name}</a></span>
         
          
         <button 
           className="nav-item nav-link btn"
           onClick={ handleLogout }
                    > 
         Logout
        </button>
         
          
          </div>

        </div>
        
           
        </header>
        
    );
};