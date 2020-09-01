import React from 'react';

import ProductItem from './components/ProductItem';
import './styles.css'

const sandwiches = [
    {
        id: '001',
        price: '15',
        src: 'https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/117984017_1448944215308831_2898879952512033297_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=jfqbzAUEluUAX_J2BJi&oh=4290a23c7f1f61aba303a4cc1795b389&oe=5F7876C8',
        name: 'X-SALADA',
        description: 'Pão de brioche, tomate, alface, queijo, cebola roxa, 18g de carne e molho opcional'
    },
    {
        id: '002',
        price: '13',
        src: 'https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118359453_2533544863611634_6029947508345305240_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=qb8ZZO7-PQEAX8QKdhR&oh=569249444e3c873062913890fc84482c&oe=5F75F8F0',
        name: 'X-BACON',
        description: 'Pão de brioche, tomate, alface, queijo, cebola roxa, 18g de carne e molho opcional'
    },
    {
        id: '003',
        price: '25',
        src: 'https://instagram.fcgh38-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/107530687_286076745841847_6713171658515508241_n.jpg?_nc_ht=instagram.fcgh38-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=_1fgWp5AkO8AX8pi0lv&oh=ccf12c9f0470edf26effe21e3c887117&oe=5F78C83D',
        name: 'X-EGG 2.0',
        description: 'Pão de brioche, tomate, alface, queijo, cebola roxa, 18g de carne e molho opcional'
    },
]

function ProductsContainer({ categoryName, AddBasket }) {
    return (
        <>
            <section id="products-container">
                <h1>{categoryName}</h1>

                <div className="products-group">
                    {sandwiches.map((sandwich) => {
                        return <ProductItem
                            key={sandwich.id}
                            sandwich={sandwich}
                            AddSandwichInBasket={AddBasket}
                        />
                    })}

                </div>

            </section>
        </>
    );
};


export default ProductsContainer;