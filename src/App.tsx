import { defaultTheme } from "./styles/theme/default"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { Wrapper } from "./styles"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Router />
        </Wrapper>
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
