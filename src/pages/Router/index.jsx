import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import HomePage from '../Home';


function Router(){
    return(
        <BrowserRouter>
            <Route path="/" component={HomePage} exact/>
        </BrowserRouter>
    );
};


export default Router;