import React from 'react';

import PageRoot from '../../components/PageRoot';
import PromoItem from '../../components/Promo';

//import './styles.css';


function PromoPage(){
    return(
        <PageRoot>
            <PromoItem/>
            <PromoItem/>
        </PageRoot>
    );
};


export default PromoPage;