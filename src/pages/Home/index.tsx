import { HomeContainer } from "./styles";
import { Intro } from "./components/Intro";
import { CoffeeListComponent } from "./components/CoffeeList";

export function Home() {

    return (
        <HomeContainer>

            <Intro />

            <CoffeeListComponent />

        </HomeContainer>
    )
}