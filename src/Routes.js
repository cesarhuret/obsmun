import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Team from './Pages/Team';
import Home from './Pages/Home'
import School from './Pages/School';
import OBSMUN from './Pages/OBSMUN';
import Registration from './Pages/Registration';

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">                
                    <Home/>
                </Route>
                <Route path="/obs">
                    
                    <School/>

                </Route>
                <Route path="/obsmun">
                    
                    <OBSMUN/>

                </Route>
                <Route path="/documents">
                    
                    {/* <About/> */}

                </Route>
                <Route path="/team">
                    
                   <Team/>

                </Route>
                <Route path="/registration">
                    
                    <Registration/>

                </Route>
                <Route path="/sponsors">
                    
                    {/* <About/> */}

                </Route>
                <Route path="/socialevent">
                    
                    {/* <About/> */}

                </Route>
            </Switch>
        </BrowserRouter>

    );
}

