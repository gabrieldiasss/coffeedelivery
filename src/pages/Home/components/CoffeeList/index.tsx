import { Card } from "../../../../components/Card";
import { coffees } from "../../../../data/coffees";
import { CoffeeList, CoffeeListContainer, FilteredCoffee, FilteredCoffeeTag } from "./styles";

interface Coffees {
    id: number
    name: string
    tags: string[]
    description: string
    photo: string
    price: number
}

export function CoffeeListComponent() {

    return (
        <CoffeeListContainer>
            <header>
                <h1>Nossos cafés</h1>

                <FilteredCoffee>
                    <FilteredCoffeeTag type="submit" >
                        TRADICIONAL
                    </FilteredCoffeeTag>
                </FilteredCoffee>
            </header>

            <CoffeeList>
                {coffees.map((coffee: Coffees) => (
                    <Card key={coffee.id} coffee={coffee} />
                ))}
            </CoffeeList>
        </CoffeeListContainer>
    )
}