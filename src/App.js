
import {Header} from './components/Header/Header';
import {Homepage} from './components/homepage/Homepage';
import {Footer} from './components/Footer/Footer'
import { AppRouter } from './router/AppRouter';
import { useReducer } from 'react';
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';
import { useEffect } from 'react';


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function App() {
  const [ user, dispatch ] = useReducer(authReducer, {}, init);

  useEffect(() => {
      localStorage.setItem( 'user', JSON.stringify(user) );
  }, [user])

  return (

      <AuthContext.Provider value={{ user, dispatch }}>
          <AppRouter />
      </AuthContext.Provider>

  )
}

export default App;
