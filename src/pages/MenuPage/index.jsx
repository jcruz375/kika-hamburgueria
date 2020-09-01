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
        ])
    }
    var totalPrice = 0
    for (var i = 0; i < pricesGroup.length; i++) {
        totalPrice += pricesGroup[i];
    }
    //console.log(basketKey)
    return (
        <>
            <Bag basket={basket} totalPrice={totalPrice} />
            <PageRoot>

                <ProductsContainer AddBasket={handleAddSandwichInBasket} categoryName="Hamburgueres 1.0" />

            </PageRoot>
        </>
    );
};


export default MenuPage;