import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CoffeeShoppingCart } from "./components/CoffeeShoppingCart";
import { CheckoutContainer, CompleteOrder, DeliveryAdress, DeliveryAdressInputs, FormOfPayment, FormOfPaymentMethods } from "./styles";

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

            <CoffeeShoppingCart />
        </CheckoutContainer>
    )
}