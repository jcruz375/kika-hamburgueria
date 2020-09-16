import React from 'react';
import styled from 'styled-components';

import './styles.css'

const PromoCard = styled.div`
width: 45rem;
height: 40rem;
padding: 10px;

margin-left: 15%;
margin-top:10%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

border-radius: 1.9rem;

background: var(--color-box-base);

font: 400 2rem Nunito;
color: var(--color-text-title);

@media(min-width: 1100px){
    width: 80rem;
    height: 50rem;

    font: 400 3rem Nunito;
    
    margin-left: 22%;
    margin-top:5%;

    padding:0 20px;
}

`

function PromoItem(){
    return (
        <PromoCard id="card">
            <h1 className="Promo-title">Para toda a família!</h1>
            <span>
                <img src="https://www.selecoes.com.br/wp-content/uploads/2019/05/hamburguer-760x450.jpg" alt="Imagem da promo"/>
            </span>
            <p>Peça agora 3 x-bacons 1.0 por apenas R$30</p>
            <button className="btn btn-block btn-warning">Pedir Essa!</button>
        </PromoCard>
    )
};

export default PromoItem;