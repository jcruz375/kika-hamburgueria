import React from 'react';
import PageRoot from '../../components/PageRoot';

import './styles.css';


function RequestsPage() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const promos = JSON.parse(localStorage.getItem("promos")) || [];
    const productsPrice = JSON.parse(localStorage.getItem("productsPrice")) || [];
    const promosPrice = JSON.parse(localStorage.getItem("promosPrice")) || [];
    const pricesGroup = [productsPrice, promosPrice];

    var totalPrice = 0;
    for (var i = 0; i < pricesGroup.length; i++) {
        totalPrice += pricesGroup[i];
    };

    function handleCancelOrder() {
        localStorage.setItem("products", JSON.stringify([]));
        localStorage.setItem("promos", JSON.stringify([]));
        localStorage.setItem("productsPrice", JSON.stringify([]));
        localStorage.setItem("promosPrice", JSON.stringify([]));
        alert(`pedido realizado! Preço: R$${totalPrice} + Taxa de entrega!`)
    }
    return (
        <PageRoot>
            <div className="container" id="order-data">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleCancelOrder();
                }}>
                    <div className="form-group">
                        <label htmlFor="Name">Seu nome:</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="Name"
                            placeholder="Nome:"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Whats-App:</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="contact"
                            placeholder="Número:"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adress">Endereço:</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="adress"
                            placeholder="Endereço:"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Payment">Forma de pagamento:</label>
                        <select className="form-control form-control-lg" id="Payment">
                            <option>Débito</option>
                            <option>Crédito</option>
                            <option>Sodexo</option>
                            <option>Alelo</option>
                            <option>VR-benefícios</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Observations">Observações:</label>
                        <textarea className="form-control form-control-lg" id="Observations" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-warning btn-block">CONCLUIR PEDIDO</button>
                </form>
                <br />
                <hr />
                <div className="card">
                    <div className="card-header">
                        <h3>SEUS PEDIDOS (Preço: {totalPrice})</h3>
                    </div>
                    <div className="card-body">
                        <h3>Itens</h3>
                        {products.map(productItem => {
                            return (
                                <h4 key={products.indexOf(productItem)}>
                                    {`${productItem.name}  -  R$${productItem.price}`}
                                </h4>
                            )
                        })}
                        <br />
                        <h3>Combos</h3>
                        {promos.map(promoItem => {
                            return (
                                <h4 key={promos.indexOf(promoItem)}>
                                    {`${promoItem.name} - R$${promoItem.price}`}
                                </h4>
                            )
                        })}
                    </div>
                </div>
            </div>
        </PageRoot>
    );
};


export default RequestsPage;