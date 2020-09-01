import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Span = styled.span`
width: 25rem;
height: 4rem;
position: absolute;
top: 18%;
right: 5%;
z-index: 1;
`;


const Bag = ({ basket }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <>
            <Span>

                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        SACOLA
                </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                        {basket.map((basketItem) => {
                            return (
                                <DropdownItem key={basketItem.id} disabled>
                                    {`${basketItem.name}  -  R$${basketItem.price},00`}
                                    
                                </DropdownItem>
                            )
                        })}
                        <DropdownItem divider />
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </Span>
        </>
    );
}

export default Bag;