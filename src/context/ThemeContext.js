//initialize new context
import React, { createContext, useState, useEffect } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "../theme/theme"

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
})

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
`

export default props => {
  const [isDarkMode, setDarkMode] = useState(false)

  //check if browser supports dark scheme
  // const supportsDarkMode = () =>
  //   window.matchMedia("(prefers-color-scheme: dark)").matches === true

  //on load check local storage
  useEffect(() => {
    const isDarkLocal = JSON.parse(localStorage.getItem("isDarkMode"))

    isDarkLocal === false ? setDarkMode(false) : setDarkMode(true)
  }, [])

  //set dark mode and put it in local storage
  function toggleDarkMode() {
    setDarkMode(!isDarkMode)
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode))
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={Theme}>
        <ThemeProvider theme={isDarkMode ? Theme.darkTheme : Theme.lightTheme}>
          <GlobalStyles />
          {props.children}
        </ThemeProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
