import './Homepage.scss'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import Fallout from '../../assets/Fallout-76.jpg'
import AtomHeart from '../../assets/Atomic-Heart.jpg'
import Stalker from '../../assets/Stalker.jpg'
import Arrow from '../../assets/arrow.png'

export const Homepage = () => {
    return(
        <div className="Homepage-Container">
            
            <div className="spacing">

            </div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Fallout}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className="Tags">
                    <Link to={`./TripleA`}>
                        <span>TRIPLE A</span>
                    </Link>
                    <span>
                        SHOOTER
                    </span>
                    </div>
                   
                <h3>FALLOUT 76</h3>
                <p>Bethesda Studios ha anunciado que la Actualización 29 para Fallout 76 se implementará hoy (3 de agosto), luego de un breve tiempo de inactividad del servidor para el mantenimiento requerido.</p>
                <img src={Arrow}/>
                <Link to={`./Game/TA-Fallout-76`}>
                Conoce mas
                </Link>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={AtomHeart}
                alt="Second slide"
                />

                <Carousel.Caption>
                <div className="Tags">
                    <Link to={`./TripleA`}>
                        <span>TRIPLE A</span>
                    </Link>
                    <span>
                        SHOOTER
                    </span>
                    </div>
                <h3>ATOMIC HEART</h3>
                <p>Un juego de combate en primera persona de realidad alternativa de la era soviética con robots asesinos, cámaras de tortura con temática de payasos y abuelas atrapadas en una masa molecular fluida.</p>
                <a><img src={Arrow}/>conoce mas</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Stalker}
                alt="Third slide"
                />

                <Carousel.Caption>
                <div className="Tags">
                    <Link to={`./TripleA`}>
                        <span>TRIPLE A</span>
                    </Link>
                    <span>
                        ATMOSPHERIC
                    </span>
                    </div>
                <h3>S.T.A.L.K.E.R 2</h3>
                <p>STALKER 2: Heart of Chernobyl es la próxima entrada en la franquicia STALKER. El juego se lanzará 13 años después de la última entrega de la serie, y hará su debut en consolas como título exclusivo de Xbox Series X. Ponte al día sobre este nuevo shooter de supervivencia postapocalíptico.</p>
                <a><img src={Arrow}/>conoce mas</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            </div>
  
   
     )
}