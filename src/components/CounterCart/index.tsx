import { Minus, Plus } from "phosphor-react";
import { CounterCartContainer, IconWrapper } from "./styles";

interface CounterProps {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

export function CounterCart({ quantity, onIncrease, onDecrease }: CounterProps) {

    return (
        <CounterCartContainer>
            <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
                <Minus />
            </IconWrapper>
            {quantity}
            <IconWrapper onClick={onIncrease}>
                <Plus  />
            </IconWrapper>
        </CounterCartContainer>
    )
}