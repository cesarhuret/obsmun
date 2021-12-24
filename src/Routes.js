import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Team from './Pages/Team';
import Home from './Pages/Home'
import School from './Pages/School';
import OBSMUN from './Pages/OBSMUN';
import Registration from './Pages/Registration';
import { RedirectToHome } from './Pages/RedirectToHome';

export function Routes() {
    return (
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

                <Route component={RedirectToHome} />
            </Switch>

    );
}

