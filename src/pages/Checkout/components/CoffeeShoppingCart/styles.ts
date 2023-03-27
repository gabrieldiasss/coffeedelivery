import styled from 'styled-components'

export const ShoppingCart = styled.section`
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  margin-top: 1rem;
`

export const ConfirmOrder = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 1rem;

  button[type='submit'] {
    background-color: ${(props) => props.theme['yellow-500']};
    border: 0;
    color: ${(props) => props.theme.white};
    height: 2.875rem;
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      transition: 0.2s;
      background-color: ${(props) => props.theme['yellow-900']};
    }
  }
`

export const ConfirmOrderStyleBase = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TotalItems = styled(ConfirmOrderStyleBase)``

export const Freight = styled(ConfirmOrderStyleBase)``

export const TotalOrder = styled(ConfirmOrderStyleBase)`
  font-size: 1.25rem;
`
