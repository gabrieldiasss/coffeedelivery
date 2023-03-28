import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;position: relative;

  > p {
    color: ${props => props.theme['base-error']};
    margin-top: 0.5rem;
    font-size: 0.85rem;
  }
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 2px solid ${props => props.theme['gray-400']};
  background-color: ${props => props.theme['gray-300']};
  display: flex;
  align-items: center;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${props => props.theme['yellow-900']};
  }

  ${(props) => props.hasError  &&css`border-color: ${props.theme['base-error']};`}
`

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;

  outline: 0;

  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${props => props.theme['gray-700']};

  &::placeholder {
    color: ${props => props.theme['gray-600']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${props => props.theme['gray-600']};
`