import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import POAPClass from './Pages/Home'

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">                
                    <POAPClass/>
                </Route>
                <Route path="/obs">
                    
                    {/* <About/> */}

                </Route>
                <Route path="/documents">
                    
                    {/* <About/> */}

                </Route>
                <Route path="/team">
                    
                    {/* <About/> */}

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

