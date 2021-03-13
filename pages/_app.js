import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../src/globalStyles"
import { theme } from "../src/theme"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}