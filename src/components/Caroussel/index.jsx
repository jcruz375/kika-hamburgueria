import React from "react";
import Slider from "react-slick";

import './styles.css'

import carrousselImg from '../../assets/images/carroussel01.png'

function Caroussel() {
    return (
        <div className="carroussel">
            <section>
                <ul>
                    <li>
                        <img src={carrousselImg} alt="Hamburguer 1" />
                    </li>

                </ul>
            </section>
        </div>
    )
}

export default Caroussel;