import './Footer.scss'
import dollar from '../../assets/Show-Me-the-Money.png'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return(
        <div className="Footer-Container">
            <div>
            <p>
               <Link to="/AboutUs">About Us</Link> 
            </p>
            </div>
            <div>
            <p>
                Contactanos
            </p>
            </div>
            <div>
            <p>
                footer
            </p>
            </div>
            <div>
            <p>
                footer
            </p>
            </div>
   
        </div>
     )
}