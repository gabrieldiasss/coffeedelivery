import styled from 'styled-components';

export const CompleteOrder = styled.div`
  input {
    padding: 1rem;
  }
`

export const CoffeeCard = styled.section`
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
`

export const FormSectionContainer = styled(CoffeeCard)`
  margin-top: 1rem;
`

