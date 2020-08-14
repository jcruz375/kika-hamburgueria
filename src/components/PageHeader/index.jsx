import React from 'react';

import logoImg from '../../assets/images/logo.svg'

import './styles.css';

function PageHeader() {
    return (
        <div className="page-header">
            <div className="header-content">
                <span>
                    <img src={logoImg} alt="Kika's logo"/>
                </span>
                <div className="button-block">
                    <a href="#"><p>HOME</p></a>
                    <a href="#"><p>CARDÁPIO</p></a>
                    <a href="#"><p>DELIVERY</p></a>
                    <a href="#"><p>PROMOÇÕES</p></a>
                    <a href="#"><p>PEDIDOS</p></a>
                    <a href="#"><p>CONTATO</p></a>
                </div>
            </div>
        </div>
    )
};


export default PageHeader;