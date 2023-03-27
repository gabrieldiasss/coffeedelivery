import { Minus, Plus } from "phosphor-react";
import { CounterCartContainer, IconWrapper } from "./styles";

interface CounterProps {
    quantity: number | undefined
    onIncrease: () => void
    onDecrease: () => void
}

export function CounterCart({ quantity, onIncrease, onDecrease }: CounterProps) {

    return (
        <CounterCartContainer>
            <IconWrapper disabled={quantity <= 1} type='button'>
                <Minus onClick={onDecrease} />
            </IconWrapper>
            {quantity}
            <IconWrapper type='button'>
                <Plus onClick={onIncrease} />
            </IconWrapper>
        </CounterCartContainer>
    )
}