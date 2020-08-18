import React from "react";
//import Slider from "react-slick";

import './styles.css'

import carrousselImg01 from '../../assets/images/carroussel.png'
import carrousselImg02 from '../../assets/images/carroussel02.jpeg'//editar imagem (quebrou o layout)
import carrousselImg03 from '../../assets/images/carroussel03.jpeg'//editar imagem (quebrou o layout)

function Caroussel() {
    return (
        <div className="carroussel">
            <section>
                <ul>

                    <li>
                        <img src={carrousselImg01} alt="Hamburguer 1" />
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Caroussel;