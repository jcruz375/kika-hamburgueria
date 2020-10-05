import React, { useState } from 'react';

import PageRoot from '../../components/PageRoot';
import ProductsContainer from '../../components/Product';
import Bag from '../../components/Product/components/Basket';


//import './styles.css';


function MenuPage() {
    const [basket, setBasket] = useState([]);
    const [pricesGroup, setPricesGroup] = useState([]);

    const handleAddSandwichInBasket = (sandwich) => {
        setBasket([
            ...basket,
            sandwich
        ]);
        const price = parseInt(sandwich.price);
        setPricesGroup([
            ...pricesGroup,
            price
        ]);
    }
    var totalPrice = 0;
    if (basket) {
        for (var i = 0; i < pricesGroup.length; i++) {
            totalPrice += pricesGroup[i];
        };
    } else {
        totalPrice = 0;
    }

    function handleCleanBasket() {
        setBasket([]);
        setPricesGroup([]);
    };
    return (
        <>
            <PageRoot>
            <Bag
                basket={basket}
                cleanBasket={handleCleanBasket}
                totalPrice={totalPrice}
                basketType="products"
            />

                <ProductsContainer AddBasket={handleAddSandwichInBasket} categoryName="Hamburgueres 1.0" />

            </PageRoot>
        </>
    );
};


export default MenuPage;