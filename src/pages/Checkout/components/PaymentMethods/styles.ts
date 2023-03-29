import styled from 'styled-components';

export const FormOfPaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  > p {
    grid-column: span 3;
    color: ${props => props.theme['base-error']};
  }
`