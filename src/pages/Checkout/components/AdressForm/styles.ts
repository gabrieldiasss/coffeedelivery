import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${props => props.theme['base-error']};
    margin-top: 0.5rem;
  }
`

export const DeliveryAdressForm = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: 200px 1fr 80px;

  grid-template-areas:
    'cep cep cep'
    'street street street'
    'number complement complement'
    'neighborhood city uf';

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