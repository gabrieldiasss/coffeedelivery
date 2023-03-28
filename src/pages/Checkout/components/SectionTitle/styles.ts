import styled from 'styled-components';

export const SectionTitleContainer = styled.header`
    display: flex;

    svg {
      color: ${(props) => props.theme['yellow-900']};
    }

    > div {
      margin-left: 8px;
    }
`