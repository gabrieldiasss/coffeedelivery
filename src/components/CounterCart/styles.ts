import styled from 'styled-components'

export const CounterCartContainer = styled.div`
  display: flex;
  align-items: flex-center;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 0.5rem 0.5rem;

  border-radius: 5px;
  padding: 0.5rem 1rem;

  gap: 0.5rem;

  
  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${props => props.theme['gray-300']};
    &:focus {
      outline: none;
    }
  }

  button[type='button'] {
    background: none;
    border: 0;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`

export const IconWrapper = styled.button`
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

`