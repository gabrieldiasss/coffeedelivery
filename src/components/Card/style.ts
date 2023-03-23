import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-200']};

  padding: 1.25rem;
  border-radius: 6px 36px 6px 36px;

  text-align: center;

  p {
    color: ${(props) => props.theme['gray-600']};
    max-width: 250px;
  }
`

export const HeaderCardCoffee = styled.header`
  display: flex;
  flex-direction: column;

  img {
    width: 120px;
    height: 120px;
    margin-top: -4rem;
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const CoffeeTagList = styled.div`
  display: flex;
  justify-content: center;

  gap: 0.5rem;

  margin-top: 1rem;
`

export const CoffeeTag = styled.div`
  background-color: ${(props) => props.theme['yellow-200']};
  color: ${(props) => props.theme['yellow-900']};
  border-radius: 100px;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
`

export const FooterCardCoffee = styled.footer`
  display: flex;
  align-items: center;

  margin-top: 2rem;

  gap: 2rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const Price = styled.div`
  span {
    font-size: 0.875rem;
    display: flex;
    align-items: center;
  }

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-700']};
    font-weight: 800;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem 0.5rem;

  background-color: ${(props) => props.theme['purple-900']};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['gray-100']};
  }

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
    transition: 0.2s;
  }
`
