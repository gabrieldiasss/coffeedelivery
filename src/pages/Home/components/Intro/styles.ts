import styled from "styled-components"

export const IntroHomeContainer = styled.div`
    position: relative;
    backdrop-filter: blur(7rem);
    z-index: 1;
`

export const IntroHomeContent = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;

    padding: 2rem 0;

    h1 {
        font-size: 3rem;
    }

    p {
        margin-top: 1rem;
        font-size: 1.25rem;
    }
`

export const IntroHomeItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    
    margin-top: 4rem;

    span {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.5rem;
    border-radius: 50%;
`

export const ItemShopping = styled(Item)`
    background-color: ${props => props.theme['yellow-900']};
`

export const ItemBox = styled(Item)`
    background-color: ${props => props.theme['gray-700']};

`

export const ItemTimer = styled(Item)`
    background-color: ${props => props.theme['yellow-500']};
`

export const ItemCoffee = styled(Item)`
    background-color: ${props => props.theme['purple-500']};
`