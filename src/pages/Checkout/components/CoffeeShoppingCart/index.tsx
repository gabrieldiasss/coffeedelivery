import { Trash } from "phosphor-react";
import { CoffeeCart, CoffeeCartActions, CoffeeCartElements, CoffeeCartPrice, ConfirmOrder, DeleteCoffeeCart, Freight, ShoppingCart, TotalItems, TotalOrder } from "./styles";
import Expresso from '../../../../assets/Expresso.svg'
import { CounterCart } from "../../../../components/CounterCart";

export function CoffeeShoppingCart() {

    return (
        <aside>
            <h2>Cafés selecionados</h2>

            <ShoppingCart>
                <CoffeeCart>
                    <CoffeeCartElements>
                        <img src={Expresso} alt="" />

                        <div>
                            Expresso Tradicional

                            <CoffeeCartActions>

                                <CounterCart />
                                
                                <DeleteCoffeeCart type="button">
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
        </aside>
    )
}