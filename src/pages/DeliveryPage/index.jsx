import React from 'react';
import PageRoot from '../../components/PageRoot';

import './styles.css';


function DeliveryPage() {
    return (
        <PageRoot>
            <div id="content" className="container">
                <h1>Funcionamos apenas com delivery!</h1>
                <span>
                    <img 
                        src="http://maps.googleapis.com/maps/api/staticmap?center=-22.912869, -43.228963&zoom=15&size=250x250"
                        alt="imagem do mapa"
                    />
                </span>
            </div>
        </PageRoot>
    );
};


export default DeliveryPage;