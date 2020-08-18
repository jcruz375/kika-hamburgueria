import React from 'react';
import styled from 'styled-components';

import './styles.css';

const Card = styled.div`
width: 30rem;
height: 35rem;
margin-right: 3.6rem;
padding:0 5px;


display: flex;
flex-direction: column;
align-items: center;

border-radius: 1.9rem;

background: var(--color-box-base);

font: 700 1.8rem Nunito;
color: var(--color-text-title);

@media(min-width: 1100px){
    width: 30rem;
    height: 40rem;

    margin-right: 15rem;

    padding:0 10px;
}

`


function ProductItem(){
    return(
        <Card>
            <span className="img-container">
                <img src="https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/116874628_2711902729094747_5760585771853528550_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=xZMYwuLVEfUAX_HeoMD&oh=1e53e0e98a9250d85fb20b2b2276071b&oe=5F65688A" 
                    alt="Foto do lanche"
                />
            </span>
            <h2>X-SALADA</h2>

            <p id="description">Pão de brioche, tomate, alface, queijo, cebola roxa, 18g de carne e molho opicional</p>
            
            <h1 id="price">R$ 13,00</h1>

            <form>
                <input type="hidden" value="001"/>
                <button>ADCIONAR</button>
            </form>
        </Card>
    );
};


export default ProductItem;
