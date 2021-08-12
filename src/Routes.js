import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Team from './Pages/Team';
import Home from './Pages/Home'
import School from './Pages/School';
import OBSMUN from './Pages/OBSMUN';

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
                    
                    {/* <About/> */}

                </Route>
                <Route path="/sponsors">
                    
                    {/* <About/> */}

                </Route>
            </Switch>
        </BrowserRouter>

    );
}

