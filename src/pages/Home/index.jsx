import React from 'react';

import PageRoot from '../../components/PageRoot';
import Caroussel from '../../components/Caroussel';
import './styles.css'

import imgBG from '../../assets/images/objects.svg'

function HomePage() {   
    return (
        <PageRoot>
            <Caroussel />
            <div className="img-background">
                <img src={imgBG} alt="Nossa formula" />
            </div>
        </PageRoot>
    )
}


export default HomePage;