import React, { useState } from 'react';

import PageRoot from '../../components/PageRoot';
import ProductsContainer from '../../components/Product';
import Bag from '../../components/Product/components/Basket';


//import './styles.css';


function MenuPage(){
    const [basket, setBasket] = useState([]);

    const handleAddSandwichInBasket = (sandwich) => {
        setBasket([
            ...basket,
            sandwich
        ])
    }
    //console.log(basket)
    return(
        <>
        <Bag basket={basket} />
        <PageRoot>

            <ProductsContainer AddBasket={handleAddSandwichInBasket} categoryName="Hamburgueres 1.0"/>

        </PageRoot>
        </>
    );
};


export default MenuPage;