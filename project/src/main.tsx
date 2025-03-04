import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaults'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
