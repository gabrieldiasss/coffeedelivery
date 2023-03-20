import styled from 'styled-components';

export const CoffeeListContainer = styled.section`

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const FilteredCoffee = styled.div`
    display: flex;
`

export const FilteredCoffeeTag = styled.button`
    border: 1px solid ${props => props.theme['yellow-900']};
    border-radius: 100px;
    padding: 0.5rem 0.75rem;
    color: ${props => props.theme['yellow-900']};
    font-weight: 700;

    background: none;

    &:hover {
        background-color: ${props => props.theme['yellow-900']};
        color: ${props => props.theme['gray-100']};
        transition: .2s;
    }
`

export const CoffeeList = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 4rem 2rem;
    margin-top: 4rem;
`

