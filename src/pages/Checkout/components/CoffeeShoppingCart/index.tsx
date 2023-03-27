import { ConfirmOrder, Freight, ShoppingCart, TotalItems, TotalOrder } from "./styles";
import { useContext } from "react";
import { CoffeeCartContext } from "../../../../contexts/CoffeeCartContext";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { formatPrice } from "../../../../utils/formatPrice";

const DELIVERY_PRICE = 3.5

export function CoffeeShoppingCart() {

    const { coffeesCart, cartItemsTotal} = useContext(CoffeeCartContext)
    const cartTotal = DELIVERY_PRICE + cartItemsTotal

    const formattedItemsTotal = formatPrice(cartItemsTotal)
    const formattedCartTotal = formatPrice(cartTotal)
    const formattedDelivery = formatPrice(DELIVERY_PRICE)

    const cartQuantity = coffeesCart.length

    return (
        <aside>
            <h2>Cafés selecionados</h2>

            <ShoppingCart>
                {coffeesCart.map((coffee) => (
                    <CoffeeCartCard coffee={coffee} />
                ))}

                <ConfirmOrder>
                    <TotalItems>
                        <span>Total de itens</span>
                        <span>R$ {formattedItemsTotal}</span>
                    </TotalItems>

                    <Freight>
                        <span>Entrega</span>
                        <span>R$ {formattedDelivery}</span>
                    </Freight>

                    <TotalOrder>
                        <b>Total</b>
                        <b>R$ {formattedCartTotal}</b>
                    </TotalOrder>

                    <button disabled={cartQuantity <= 0} type="submit">CONFIRMAR PEDIDO</button>
                </ConfirmOrder>
            </ShoppingCart>
        </aside>
    )
}