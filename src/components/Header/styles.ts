import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme['gray-100']};
`

export const HeaderContent = styled.div`
    height: 6.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        ul {
            display: flex;
            gap: 1rem;
        }
    }
`

export const NavActionsBase = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 0.5rem 0.5rem;
` 

export const Location = styled(NavActionsBase)`
    background-color: ${props => props.theme['purple-200']};
    color: ${props => props.theme['purple-900']};

    gap: 0.5rem;

    svg {
        color: ${props => props.theme['purple-500']};
    }
`

export const Icon = styled(NavActionsBase)`
    background-color: ${props => props.theme['yellow-200']};
    cursor: pointer;
    position: relative;

    svg {
        color: ${props => props.theme['yellow-500']};
    }
`

export const CounterCartLenght = styled.div`
    position: absolute;
    right: -7px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme['white']};

    font-size: 0.75rem;
    font-weight: bold;
    background-color: ${props => props.theme['yellow-500']};
`