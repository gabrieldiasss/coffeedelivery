import { defaultTheme } from './styles/theme/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Wrapper } from './styles'
import { CoffeeCartProvider } from './contexts/CoffeeCartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CoffeeCartProvider>
        <BrowserRouter>
          <Wrapper>
            <Router />
          </Wrapper>
        </BrowserRouter>
      </CoffeeCartProvider>
    </ThemeProvider>
  )
}

export default App
