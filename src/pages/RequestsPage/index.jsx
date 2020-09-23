import React from 'react';
import PageRoot from '../../components/PageRoot';

import './styles.css';


function RequestsPage() {
    return (
        <PageRoot>
            <div className="container" id="order-data">
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Whats-App:</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="exampleFormControlInput1"
                            placeholder="Número"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Endereço:</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="exampleFormControlInput1"
                            placeholder="Endereço"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Forma de pagamento:</label>
                        <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                            <option>Débito</option>
                            <option>Crédito</option>
                            <option>Sodexo</option>
                            <option>Alelo</option>
                            <option>VR-benefícios</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Observações:</label>
                        <textarea className="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-outline-warning btn-block">CONCLUIR PEDIDO</button>
                </form>
                <br />
                <br/>
                <hr />
                <h1>SEUS PEDIDOS</h1>
            </div>
        </PageRoot>
    );
};


export default RequestsPage;