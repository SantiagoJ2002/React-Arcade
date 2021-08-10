import {
    BrowserRouter as Router,
    Switch,
    
 } from 'react-router-dom';
 import { LoginScreen } from '../components/LoginScreen/LoginScreen';
 import { Header } from '../components/Header/Header';
 import { Homepage } from '../components/homepage/Homepage';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

    return(
        <Router>
      <div>


        <Switch>
            <PublicRoute 
            exact 
            path = "/login" 
            component={ LoginScreen}
            isAuthenticated={ user.logged }/>        

            <PrivateRoute 
              path="/" 
              component={ DashboardRoutes } 
              isAuthenticated={ user.logged }/>        
            </Switch>
      </div>
    </Router>
    )
}