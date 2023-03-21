import { Minus, Plus } from "phosphor-react";
import { CounterCartContainer } from "./styles";

export function CounterCart() {
    return (
        <CounterCartContainer>
                <button type='button' ><Minus /></button>
                1
                <button type='button' ><Plus /></button>
        </CounterCartContainer>
    )
}