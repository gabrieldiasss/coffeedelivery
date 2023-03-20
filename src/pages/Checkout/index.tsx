import { Bank, CreditCard, CurrencyDollar, IconContext, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { CheckoutContainer, CoffeeCart, CoffeeCartActions, CoffeeCartElements, CoffeeCartPrice, CoffeeSelected, CompleteOrder, ConfirmOrder, CounterCart, DeleteCoffeeCart, DeliveryAdress, DeliveryAdressInputs, FormOfPayment, FormOfPaymentMethods, Freight, ShoppingCart, TotalItems, TotalOrder } from "./styles";

import Expresso from '../../assets/Expresso.svg'

export function Checkout() {

    return (
        <CheckoutContainer>
            <CompleteOrder>
                <h2>Complete seu pedido</h2>

                <DeliveryAdress>

                    <header>
                        <MapPinLine size={24} />

                        <div>
                            <p>Endereço da entrega</p>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </header>

                    <DeliveryAdressInputs>

                        <input type="text" placeholder="CEP" />

                        <input type="text" placeholder="Rua" className="street" />

                        <input type="number" placeholder="Número" className="number" />

                        <input type="text" placeholder="Complemento" className="complement" />

                        <input type="text" placeholder="Bairro" className="neighborhood" />

                        <input type="text" placeholder="Cidade" className="city" />

                        <input type="text" placeholder="UF" className="uf" />
                    </DeliveryAdressInputs>
                </DeliveryAdress>

                <FormOfPayment>
                    <header>
                        <CurrencyDollar size={24} />

                        <div>
                            <p>Pagamento</p>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </header>

                    <FormOfPaymentMethods>
                        <button type="button" >
                            <CreditCard /> CARTÃO DE CRÉDITO
                        </button>

                        <button type="button">
                            <Bank /> CARTÃO DE DÉBITO
                        </button>

                        <button type="button">
                            <Money /> DINHEIRO
                        </button>
                    </FormOfPaymentMethods>
                </FormOfPayment>
            </CompleteOrder>

            <CoffeeSelected>
                <h2>Cafés selecionados</h2>

                <ShoppingCart>
                    <CoffeeCart>
                        <CoffeeCartElements>
                            <img src={Expresso} alt="" />

                            <div>
                                Expresso Tradicional

                                <CoffeeCartActions>
                                    <CounterCart>
                                        <IconContext.Provider value={{ color: '#8047F8', size: '20px' }} >
                                            <button type='button' ><Minus /></button>
                                            1
                                            <button type='button' ><Plus /></button>
                                        </IconContext.Provider>
                                    </CounterCart>

                                    <DeleteCoffeeCart type="button" >
                                        <Trash /> REMOVER
                                    </DeleteCoffeeCart>
                                </CoffeeCartActions>
                            </div>
                        </CoffeeCartElements>

                        <CoffeeCartPrice>
                            R$ 19,80
                        </CoffeeCartPrice>
                    </CoffeeCart>

                    

                    <ConfirmOrder>
                        <TotalItems>
                            <span>Total de itens</span>
                            <span>R$ 29,70</span>
                        </TotalItems>

                        <Freight>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                        </Freight>

                        <TotalOrder>
                            <b>Total</b>
                            <b>R$ 33,20</b>
                        </TotalOrder>

                        <button type="submit">CONFIRMAR PEDIDO</button>
                    </ConfirmOrder>
                </ShoppingCart>
            </CoffeeSelected>
        </CheckoutContainer>
    )
}