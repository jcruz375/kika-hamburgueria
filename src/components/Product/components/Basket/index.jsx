import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//import trashImg from '../../../../assets/images/trash.svg';
import basketImg from '../../../../assets/images/basket.svg';
import './styles.css';

const Bag = ({ basket, totalPrice }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <>

                <Dropdown id="Basket" isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle className="basket-folder" caret>
                        <span>
                            <img src={basketImg} alt="carrinho"/> 
                            <legend>0</legend>
                        </span>
                    </DropdownToggle>
                    <DropdownMenu className="basket-menu">
                        <DropdownItem className="basket-header" header>SUA CESTA</DropdownItem>
                        {basket.map((basketItem) => {
                            return (
                                
                                <DropdownItem key={basketItem.id} className="basket-item" disabled>
                                    {`${basketItem.name}  -  R$${basketItem.price},00`}
                                </DropdownItem>
                            );
                        })}
                        <DropdownItem divider />
                        <DropdownItem disabled>{`Total do pedido -- R$${totalPrice},00`}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

        </>
    );
}

export default Bag;