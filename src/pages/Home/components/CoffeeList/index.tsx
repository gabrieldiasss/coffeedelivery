import { Card } from "../../../../components/Card";
import { CoffeeList, CoffeeListContainer, FilteredCoffee, FilteredCoffeeTag } from "./styles";

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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CoffeeList>
        </CoffeeListContainer>
    )
}