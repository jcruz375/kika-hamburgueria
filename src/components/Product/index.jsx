import React from 'react';

import ProductItem from './components/ProductItem';

import './styles.css'

function ProductsContainer({categoryName}) {
    return (
        <section id="products-container">
            <h1>{categoryName}</h1>

            <div className="products-group">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>

        </section>
    );
};


export default ProductsContainer;