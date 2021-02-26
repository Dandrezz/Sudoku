import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';
  import App from '../App';
  import MatrixScreen from '../components/MatrixScreen'

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        exact 
                        path="/" 
                        component={ App }
                    />
                    <Route 
                        exact 
                        path="/input" 
                        component={ MatrixScreen }
                    />
                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
