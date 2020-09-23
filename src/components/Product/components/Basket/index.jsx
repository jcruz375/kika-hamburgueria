import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import basketImg from '../../../../assets/images/basket.svg';
import './styles.css';


const Bag = ({ basket, totalPrice, cleanBasket }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    function handleCreateOrder() {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
            title: 'Deseja completar o pedido?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Sim`,
            denyButtonText: `Não`,
            customClass: {
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Pedido realizado, nosso atendente entrará em contato!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Pedido não foi concluído!', '', 'info')
            }
        });
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