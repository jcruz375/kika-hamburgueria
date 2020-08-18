import React from 'react';

import './styles.css'

function Product() {
    return (
        <section id="products-container">
            <h1>Lanches 1.0</h1>
            <div id="product-card">
                <div className="card-header">
                    <h2>X-Bacon 1.0</h2>
                </div>

                <div className="card-body">
                    <span><img src="https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-15/e35/106009720_102654711472914_6992409888742502051_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WZzISV3Uq3MAX9TRGWK&oh=6523b176b646318b781579d1204ee2cd&oe=5F62F4AD" alt="Foto do lanche" /></span>
                    <legend>
                        Pão de brioche, queijo, bacon e carne de 180g
                </legend>
                </div>

                <div className="card-footer">
                    <button>ADCIONAR AO CARRINHO</button>
                    50$$
                </div>

            </div>
        </section>
    );
};


export default Product;