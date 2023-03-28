import styled from 'styled-components';

export const FormOfPaymentMethods = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 0;
    background-color: ${(props) => props.theme['gray-400']};
    padding: 1rem 0.5rem;
    border-radius: 6px;
    font-size: 0.75rem;

    svg {
      font-size: 20px;
      color: ${(props) => props.theme['purple-500']};
    }

    &:hover {
      transition: 0.2s;
      background-color: ${(props) => props.theme['gray-500']};
    }

    :focus {
      border: 1px solid ${(props) => props.theme['purple-500']};
      background-color: ${(props) => props.theme['purple-200']};
    }
  }
`