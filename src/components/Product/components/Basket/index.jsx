import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import basketImg from '../../../../assets/images/basket.svg';
import './styles.css';

const Bag = ({ basket, totalPrice, cleanBasket }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    function handleCreateOrder() {
        alert('atendemos apenas delivery!');
        cleanBasket();
    };

    return (
        <>

            <Dropdown id="Basket" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className="basket-folder" caret>
                    <span>
                        <img src={basketImg} alt="carrinho" />
                        <legend>{basket.length}</legend>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="basket-menu">
                    <DropdownItem className="basket-header" header>
                        SUA CESTA
                        <button onClick={cleanBasket} className="btnTrash">
                            X
                        </button>
                    </DropdownItem>
                    <DropdownItem divider />
                    {basket.map((basketItem) => {

                        return (
                            <DropdownItem key={basketItem.id} className="basket-item" disabled>
                                {`${basketItem.name}  -  R$${basketItem.price},00`}
                            </DropdownItem>
                        );
                    })}
                    <DropdownItem divider />
                    <DropdownItem className="request-price" disabled>
                        {`Total do pedido -- R$${totalPrice},00`}
                    </DropdownItem>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateOrder();
                    }}>
                        <button id="button">FAZER PEDIDO</button>

                    </form>
                </DropdownMenu>
            </Dropdown>

        </>
    );
}

export default Bag;