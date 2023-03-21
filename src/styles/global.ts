import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
    }

    body {
        background-color: ${(props) => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, strong {
        font-weight: 800;
        font-family: 'Baloo 2', 'sans-serif';
        color: ${(props) => props.theme['gray-800']};
    }

    input {
        border: 0;
        background-color: ${(props) => props.theme['gray-300']};
        border-radius: 4px;

        &::placeholder {
            color: ${(props) => props.theme['gray-600']};
        }

        :focus {
            outline: 0;
            box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-900']};
        }
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, 'sans-serif';
    }

    button {
        cursor: pointer;
    }
`
