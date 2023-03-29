import styled from 'styled-components';

export const PaymentMethodContainer = styled.div`
    /* input {
      visibility: visible;
      appearance: none;
    }  */
 
    input:checked + label div {
      background: ${({ theme }) => theme["purple-200"]};
      border-color: ${({ theme }) => theme["purple-500"]};
    }
`

export const ContentContainer = styled.div`

    padding: 0 1rem;
    background: ${({ theme }) => theme["gray-400"]};
    color: ${({ theme }) => theme["gray-800"]};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme["gray-400"]};
    transition: 0.4s;

    svg {
      color: ${({ theme }) => theme["purple-500"]};
    }

    &:hover {
      background: ${({ theme }) => theme["gray-500"]};
    }

    user-select: none;
`