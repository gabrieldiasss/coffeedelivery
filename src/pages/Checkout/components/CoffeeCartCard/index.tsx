import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CounterCart } from "../../../../components/CounterCart";
import { Coffee, CoffeeCartContext } from "../../../../contexts/CoffeeCartContext";
import { formatPrice } from "../../../../utils/formatPrice";
import { CoffeeCart, CoffeeCartActions, CoffeeCartElements, CoffeeCartPrice, DeleteCoffeeCart } from "./styles";

interface CoffeeCartCard {
    coffee: Coffee
}

export function CoffeeCartCard({ coffee }: CoffeeCartCard) {

    const { changeCartItemQuantity, removeCoffeeCart } = useContext(CoffeeCartContext)

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase")
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease")
    }

    function handleRemove() {
        removeCoffeeCart(coffee.id)
    }

    const coffeeTotal = formatPrice(coffee.price * coffee.quantity)

    return (
        <CoffeeCart key={coffee.id} >
            <CoffeeCartElements>
                <img src={`/coffees/${coffee.photo}`} alt="" />

                <div>
                    {coffee.name}

                    <CoffeeCartActions>

                        <CounterCart quantity={coffee.quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />

                        <DeleteCoffeeCart type="button" onClick={handleRemove} >
                            <Trash /> REMOVER
                        </DeleteCoffeeCart>
                    </CoffeeCartActions>
                </div>
            </CoffeeCartElements>

            <CoffeeCartPrice>
                R$ {coffeeTotal}
            </CoffeeCartPrice>
        </CoffeeCart>
    )
}