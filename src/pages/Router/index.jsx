import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../Home';
import NotFoundPage from '../NotFoundPage'
import MenuPage from '../MenuPage';
import DeliveryPage from '../DeliveryPage';
import PromoPage from '../PromoPage';
import RequestsPage from '../RequestsPage';
import ContactPage from '../ContactPage';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/cardápio" component={MenuPage} exact />
                <Route path="/delivery" component={DeliveryPage} exact />
                <Route path="/promo" component={PromoPage} exact />
                <Route path="/pedidos" component={RequestsPage} exact />
                <Route path="/contato" component={ContactPage} exact />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
};


export default Router;