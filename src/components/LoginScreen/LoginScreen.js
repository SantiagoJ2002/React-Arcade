import './LoginScreen.scss'
import { Button } from 'react-bootstrap'
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/Types'

export const LoginScreen = ({history}) => {

    const { dispatch } = useContext( AuthContext );


    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Santiago'
            }
        });

        history.replace( lastPath );
        


    }
    return(
        <div className="login-screen">
            <h1>
                login
            </h1>
            <hr />
            <Button
                className="Login"
                onClick= { handleLogin}
            >
                Login

            </Button>
            
         </div>
    )
}