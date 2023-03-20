import styled from "styled-components";

export const HomeContainer = styled.div`

`

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

export const BaseBall = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
`

export const Ball1 = styled(BaseBall)`
    background-color: ${props => props.theme['purple-200']};
    margin-top: -14%;
    left: 25%;
`

export const Ball2 = styled(BaseBall)`
    background-color: ${props => props.theme['yellow-200']};
    margin-top: -14%;
    left: 40%;
`

export const Ball3 = styled(BaseBall)`
    background-color: ${props => props.theme['purple-200']};
    margin-top: -14%;
    left: 55%;
`

export const Ball4 = styled(BaseBall)`
    background-color: ${props => props.theme['purple-200']};
    margin-top: -20%;
    right: 50%;
`

export const Ball5 = styled(BaseBall)`
    background-color: ${props => props.theme['yellow-200']};
    margin-top: -14%;
    right: 10%;
`

export const Ball6 = styled(BaseBall)`
    background-color: ${props => props.theme['yellow-200']};
    margin-top: -20%;
    left: 20%;
`