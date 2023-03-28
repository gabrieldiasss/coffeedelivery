import styled from 'styled-components';

export const InputStyleContainer = styled.input`
    border: 0;
   height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme['gray-400']};
  background-color: ${props => props.theme['gray-300']};
  display: flex;
  align-items: center;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-900']};
  }

`