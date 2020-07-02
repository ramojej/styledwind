import React from "react"
import Wrapper from "../context/ThemeContext"
import "../css/style.css"

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
