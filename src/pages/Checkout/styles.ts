import styled from "styled-components";

export const CheckoutContainer = styled.form`
    display: grid;
    grid-template-columns: 2fr 448px;
    grid-gap: 1rem;
`

export const CompleteOrder = styled.div`
    input {
        padding: 1rem;
    }
`

export const CoffeeCard = styled.section`
    padding: 2.5rem;
    background: ${props => props.theme['gray-200']};
    border-radius: 6px;
`

export const DeliveryAdress = styled(CoffeeCard)`
    
    header {

        display: flex;

        svg {
            color: ${props => props.theme['yellow-900']};
        }

        > div {
            margin-left: 8px;
        }
    }

`

export const DeliveryAdressInputs = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-gap: 1rem;

    grid-template-columns: 200px 1fr 60px;

    grid-template-areas: 
        "cep cep cep"
        "street street street"
        "number complement complement"
        "neighborhood city uf"
    ;

    .cep {
        grid-area: cep;
    }

    .street {
        grid-area: street;
    }

    .number {
        grid-area: number;
    }

    .complement {
        grid-area: complement;
    }

    .neighborhood {
        grid-area: neighborhood;
    }

    .city {
        grid-area: city;
    }

    .uf {
        grid-area: uf;
    }
`

export const FormOfPayment = styled(CoffeeCard)`
    margin-top: 1rem;

    header {

        display: flex;

        svg {
            color: ${props => props.theme['purple-500']};
        }

        > div {
            margin-left: 8px;
        }
    }
`

export const FormOfPaymentMethods = styled.div`

    margin-top: 3rem;

    display: grid;
    grid-template-columns:repeat(3, 1fr);
    gap: 1rem;

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: 0;
        background-color: ${props => props.theme['gray-400']};
        padding: 1rem;
        border-radius: 6px;

        svg {
            font-size: 20px;
            color: ${props => props.theme['purple-500']};
        }

        &:hover {
            transition: .2s;
            background-color: ${props => props.theme['gray-500']};
        }

        :focus {
            border: 1px solid ${props => props.theme['purple-500']};
            background-color: ${props => props.theme['purple-200']};
        }
    }
`

export const CoffeeSelected = styled.aside`

`

export const ShoppingCart = styled(CoffeeCard)`

`

export const CoffeeCart = styled.div`
    display: flex;
    justify-content: space-between;

    padding-bottom: 1.5rem;

    border-bottom: 1px solid ${props => props.theme['gray-400']};
`

export const CoffeeCartElements = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;
`

export const CoffeeCartActions = styled.div`
    margin-top: 0.5rem;
    display: flex;
    align-items: center;

    gap: 0.5rem;
`

export const CoffeeCartPrice = styled.div`

`

export const DeleteCoffeeCart = styled.button`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme['gray-400']};
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.75rem;
    gap: 4px;

    svg {
        color: ${props => props.theme['purple-500']};
        font-size: 20px;
    }

    :hover {
        transition: .4s;
        background-color: ${props => props.theme['gray-500']};
    }
`

export const CounterCart = styled.div`
    display: flex;
    align-items: flex-center;
    background-color: ${props => props.theme['gray-400']};
    padding: 0.5rem 0.5rem;

    border-radius: 5px;
    padding: 0.5rem 1rem;

    button[type=button] {
        background: none;
        border: 0;
    }
`

export const ConfirmOrder = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 1rem;

    button[type=submit] {
        background-color: ${props => props.theme['yellow-500']};
        border: 0;
        color: ${props => props.theme['white']};
        height: 2.875rem;
        font-weight: bold;
        border-radius: 6px;

        &:hover {
            transition: .2s;
            background-color: ${props => props.theme['yellow-900']};
        }
    }
`

export const ConfirmOrderStyleBase = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TotalItems = styled(ConfirmOrderStyleBase)`

`

export const Freight = styled(ConfirmOrderStyleBase)`

`

export const TotalOrder = styled(ConfirmOrderStyleBase)`
    font-size: 1.25rem;
`