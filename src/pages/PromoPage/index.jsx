import React, { useState } from 'react';

import PageRoot from '../../components/PageRoot';
import PromoItem from '../../components/Promo';
import Bag from '../../components/Product/components/Basket'

import './styles.css';

const promos = [
    {
        id: '001',
        price: '30',
        src: 'https://www.selecoes.com.br/wp-content/uploads/2019/05/hamburguer-760x450.jpg',
        name: 'Para toda a familia',
        description: 'Peça agora 3 x-bacons 1.0 por apenas R$30'
    },
    {
        id: '002',
        price: '15',
        src: 'https://www.selecoes.com.br/wp-content/uploads/2019/05/hamburguer-760x450.jpg',
        name: '2 por 15',
        description: 'Peça agora 2 x-bacon por 15$'
    },
]

function PromoPage() {
    const [bag, setBag] = useState([]);
    const [pricesGroup, setPricesGroup] = useState([]);

    const handleAddPromoInBasket = (promo) => {
        setBag([
            ...bag,
            promo
        ]);
        const price = parseInt(promo.price);
        setPricesGroup([
            ...pricesGroup,
            price
        ])
    }
    var totalPrice = 0;
    if (bag) {
        for (var i = 0; i < pricesGroup.length; i++) {
            totalPrice += pricesGroup[i];
        };
    } else {
        totalPrice = 0;
    }

    function handleCleanBasket() {
        setBag([]);
        setPricesGroup([]);
    };
    return (
        <PageRoot>
            <Bag
                basket={bag}
                cleanBasket={handleCleanBasket}
                totalPrice={totalPrice}
            />
            {promos.map((promo) => {
                return <PromoItem
                    key={promo.id}
                    promo={promo}
                    AddPromoInBasket={handleAddPromoInBasket}
                />
            })}
        </PageRoot>
    );
};


export default PromoPage;