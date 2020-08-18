import React from 'react';

import PageRoot from '../../components/PageRoot';
import ProductsContainer from '../../components/Product';

//import './styles.css';


function MenuPage(){
    return(
        <PageRoot>
            <ProductsContainer categoryName="Hamburgueres 1.0"/>
            <ProductsContainer categoryName="Hamburgueres 2.0"/>

        </PageRoot>
    );
};


export default MenuPage;