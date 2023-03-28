import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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

    body, input, textarea, button {
        font: 400 1rem Roboto, 'sans-serif';
    }

    button {
        cursor: pointer;
    }
`
