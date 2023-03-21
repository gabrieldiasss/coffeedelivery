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

    margin-top: 1rem;
    
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
        justify-content: center;
        gap: 0.5rem;
        border: 0;
        background-color: ${props => props.theme['gray-400']};
        padding: 1rem 0.5rem;
        border-radius: 6px;
        font-size: 0.75rem;

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