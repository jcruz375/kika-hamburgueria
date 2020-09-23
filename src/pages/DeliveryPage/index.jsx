import React from 'react';
import PageRoot from '../../components/PageRoot';

import './styles.css';


function DeliveryPage() {
    return (
        <PageRoot>
            <div id="content" className="container">
                <h1>Funcionamos apenas com delivery!</h1>
                <h3>Temos uma taxa de entrega de R$1,00 por KM de distância</h3>
            </div>
        </PageRoot>
    );
};


export default DeliveryPage;